"use server";

import { FramesFormPropsValue } from "@/model/frames-schema";
import { EditIssueProps, FramesViewType, IssuesViewType } from "@/types";

import { prisma } from "@/lib/database";
import { getCurrentStaff, getCurrentUser } from "@/lib/session";

import { getCurrentEvent } from "../events/_action";
import { CustomIdFile, utapi } from "../uploadthing";

export async function getPendingFrames(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const pendingIssues = await prisma.pendingFrames.findMany({
    skip,
    take: amount,
    where: {
      ...filter,
      rejections: {
        every: {
          resubmitted: true,
        },
      },
      approvedBy: null,
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  });

  return pendingIssues;
}

export async function getRejectedFrames(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const rejectedIssues = await prisma.pendingFrames.findMany({
    skip,
    take: amount,
    where: {
      ...filter,
      rejections: {
        some: {
          resubmitted: false,
        },
      },
    },
    orderBy,
    include: {
      createdBy: true,
      approvedBy: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  });

  return rejectedIssues;
}

export async function approvePendingFrames(
  framesIds: [string, ...string[]]
): Promise<{ variant: "success" | "destructive"; message: string }> {
  const currentUser = await getCurrentStaff();

  for (const frameId of framesIds) {
    await prisma.pendingIssues.update({
      where: { id: frameId },
      data: {
        approvedAt: new Date(),
        approvedById: currentUser.staff.id,
      },
    });
  }

  return {
    message: "Frames approved successfully.",
    variant: "success",
  };
}

export async function rejectFramesIssues(
  framesIds: [string, ...string[]],
  reason: string
) {
  const currentUser = await getCurrentStaff();

  await prisma.rejections.createMany({
    data: framesIds.map((id) => ({
      reason,
      pendingFramesId: id,
      rejectedById: currentUser.staff!.id,
    })),
  });

  return {
    message: "Frames rejected successfully.",
  };
}

export async function resubmitRejectedFrames(framesIds: [string, ...string[]]) {
  const currentUser = await getCurrentStaff();

  await prisma.rejections.updateMany({
    where: {
      pendingFramesId: {
        in: framesIds,
      },
    },
    data: {
      resubmitted: true,
      resubmittedById: currentUser.staff.id,
    },
  });

  return {
    message: "Frames resubmitted successfully.",
  };
}

export async function editFrame({ viewPortId, issue }: EditIssueProps) {
  const currentUser = await getCurrentStaff();

  const currentEvent = await getCurrentEvent(["issues"]);
  if (!currentEvent) {
    throw new Error("Issues was not Edited. No event is currently active.");
  }

  issue = issue as FramesFormPropsValue & {
    imageLink: string;
    changedImage: boolean;
  };

  if (issue.changedImage) {
    const deleteImage = await utapi.deleteFiles([
      issue.imageLink.split("/").pop()!,
    ]);

    if (!deleteImage.success) {
      throw new Error(
        "Issues was not Edited. An error occurred while deleting the image."
      );
    }

    const frameImage =
      "Frame-" +
      issue.name.replace(/\s/g, "-") +
      "-" +
      issue.rarity.replace(/\s/g, "-") +
      ".png";

    const response = await utapi.uploadFiles(
      new CustomIdFile([issue.image], frameImage, {
        type: "image/png",
        customId: currentEvent.name.replace(/\s/g, "-") + "-" + frameImage,
      })
    );

    if (response.error?.code || !response.data) {
      throw new Error(
        "Issues was not Edited. An error occurred while uploading the image."
      );
    }

    issue.imageLink = response.data.url;
  }

  const edited = await prisma.pendingFrames.update({
    where: {
      id: issue.id,
    },
    data: {
      name: issue.name,
      rarity: issue.rarity,
      code: issue.code,
      image: issue.imageLink,
    },
    include: {
      createdBy: true,
      approvedBy: true,
      rejections: {
        include: {
          rejectedBy: true,
          resubmittedBy: true,
        },
      },
    },
  });

  return {
    message: "Issues was successfully Edited.",
    issue: edited,
  };
}

export async function deleteFrames(
  viewPortId: IssuesViewType | FramesViewType,
  frames: { id: string; image: string }[],
  password: string
) {
  const currentUser = await getCurrentStaff();

  if (password !== "test") {
    throw new Error("Frames were not deleted. Incorrect password.");
  }

  const deleteImages = await utapi.deleteFiles(
    frames
      .map((frame) => frame.image.split("/").pop())
      .filter((image): image is string => !!image)
  );

  if (viewPortId === "released-frames") {
    // await prisma.frames.deleteMany({
    //   where: {
    //     id: {
    //       in: issuesIds,
    //     },
    //   },
    // });
  } else {
    await prisma.pendingFrames.deleteMany({
      where: {
        id: {
          in: frames.map((frame) => frame.id),
        },
      },
    });
  }

  return {
    message: "Frames deleted successfully.",
  };
}
