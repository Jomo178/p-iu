"use server";

import { FramesFormPropsValue, framesSchema } from "@/model/frames-schema";

import { prisma } from "@/lib/database";
import { getCurrentStaff, getCurrentUser } from "@/lib/session";

import { getCurrentEvent } from "./events/_action";
import { CustomIdFile, utapi } from "./uploadthing";

export async function UploadFrames(
  frame: FramesFormPropsValue
): Promise<{ variant: "success" | "error"; message: string }> {
  const currentUser = await getCurrentStaff();

  const parsedIssue = framesSchema.safeParse(frame);

  if (!parsedIssue.success) {
    return {
      message:
        "was not uploaded to the server. Please check the form for errors.",
      variant: "error",
    };
  }

  const currentEvent = await getCurrentEvent(["issues"]);
  if (!currentEvent) {
    return {
      message: "was not uploaded to the server. No event is currently active.",
      variant: "error",
    };
  }

  //Generate custom Frame image name based on the frame name and act
  const frameImage =
    "Frame-" +
    frame.name.replace(/\s/g, "-") +
    "-" +
    frame.rarity.replace(/\s/g, "-") +
    ".png";

  const response = await utapi.uploadFiles(
    new CustomIdFile([frame.image], frameImage, {
      type: "image/png",
      customId: currentEvent.name.replace(/\s/g, "-") + "-" + frameImage,
    })
  );

  if (response.error?.code || !response.data) {
    return {
      message:
        "was not uploaded to the server. An error occurred while uploading the image.",
      variant: "error",
    };
  }

  const createdPendingFrame = await prisma.pendingFrames.create({
    data: {
      name: frame.name,
      code: frame.code,
      rarity: frame.rarity,
      image: response.data?.url,
      createdById: currentUser.staff.id,
      eventId: currentEvent.id,
    },
  });

  if (!createdPendingFrame) {
    return {
      message:
        "was not uploaded to the server. An error occurred while creating the frame.",
      variant: "error",
    };
  }

  return {
    message: "was successfully uploaded to the server!",
    variant: "success",
  };
}

//TODO: Check if the frame code is already in the database (no frame model rn)
export async function checkDuplicateFramesCode(codes: string[]) {
  const frames = await prisma.pendingFrames.findMany({
    where: {
      code: {
        in: codes,
      },
    },
  });

  return frames.map((frame) => frame.code);
}
