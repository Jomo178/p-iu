"use server";

import { IssuesFormPropsValue, issuesSchema } from "@/model/issues-schema";

import { prisma } from "@/lib/database";
import { getCurrentUser } from "@/lib/session";

import { getCurrentEvent } from "./events/_action";
import { CustomIdFile, utapi } from "./uploadthing";

export async function UploadIssues(
  issue: IssuesFormPropsValue
): Promise<{ variant: "success" | "error"; message: string }> {
  const currentUser = await getCurrentUser();
  if (!currentUser || !currentUser.staff) {
    return {
      message: "was not uploaded to the server. You are not logged in.",
      variant: "error",
    };
  }

  const parsedIssue = issuesSchema.safeParse(issue);

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

  //Generate custom Issue image name based on the issue name and act
  const issueImage =
    "Issue-" +
    issue.name.replace(/\s/g, "-") +
    "-" +
    issue.act.replace(/\s/g, "-") +
    ".png";

  const response = await utapi.uploadFiles(
    new CustomIdFile([issue.image], issueImage, {
      type: "image/png",
      customId: currentEvent.name.replace(/\s/g, "-") + "-" + issueImage,
    })
  );

  if (response.error?.code || !response.data) {
    return {
      message:
        "was not uploaded to the server. An error occurred while uploading the image.",
      variant: "error",
    };
  }

  const createdPendingIssue = await prisma.pendingIssues.create({
    data: {
      name: issue.name,
      act: issue.act,
      group: issue.group,
      code: issue.code,
      rarity: issue.rarity,
      image: response.data?.url,
      createdById: currentUser.staff.id,
      eventId: currentEvent.id,
    },
  });

  if (!createdPendingIssue) {
    return {
      message:
        "was not uploaded to the server. An error occurred while creating the issue.",
      variant: "error",
    };
  }

  return {
    message: "was successfully uploaded to the server!",
    variant: "success",
  };
}

export async function checkDuplicateIssuesCode(codes: string[]) {
  const pendingIssues = await prisma.pendingIssues.findMany({
    where: {
      code: {
        in: codes,
      },
    },
  });

  const issues = await prisma.issues.findMany({
    where: {
      code: {
        in: codes,
      },
    },
  });

  return [...issues, ...pendingIssues].map((issue) => issue.code);
}
