"use server";

import { IssuesFormPropsValue } from "@/model/issues-schema";
import { EditIssueProps, FramesViewType, IssuesViewType } from "@/types";

import { prisma } from "@/lib/database";
import { getCurrentStaff, getCurrentUser } from "@/lib/session";

import { getCurrentEvent } from "../events/_action";
import { CustomIdFile, utapi } from "../uploadthing";

export async function getPendingIssues(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const pendingIssues = await prisma.pendingIssues.findMany({
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

export async function getRejectedIssues(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const rejectedIssues = await prisma.pendingIssues.findMany({
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

export async function approvePendingIssues(
  issuesIds: [string, ...string[]]
): Promise<{ variant: "success" | "destructive"; message: string }> {
  const currentUser = await getCurrentStaff();

  for (const issueId of issuesIds) {
    await prisma.pendingIssues.update({
      where: { id: issueId },
      data: {
        approvedAt: new Date(),
        approvedById: currentUser.staff.id,
      },
    });
  }

  return {
    message: "Issues approved successfully.",
    variant: "success",
  };
}

export async function rejectPendingIssues(
  issuesIds: [string, ...string[]],
  reason: string
) {
  const currentUser = await getCurrentStaff();

  await prisma.rejections.createMany({
    data: issuesIds.map((id) => ({
      reason,
      pendingIssuesId: id,
      rejectedById: currentUser.staff!.id,
    })),
  });

  return {
    message: "Issues rejected successfully.",
  };
}

export async function getUpcomingIssues(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const soonToBeReleasedIssues = await prisma.pendingIssues.findMany({
    skip,
    take: amount,
    where: {
      approvedBy: {
        id: {
          not: undefined,
        },
      },
      ...filter,
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

  return soonToBeReleasedIssues;
}

export async function resubmitRejectedIssues(
  issuesIds: [string, ...string[]]
): Promise<{ variant: "success" | "destructive"; message: string }> {
  const currentUser = await getCurrentStaff();

  await prisma.rejections.updateMany({
    where: {
      pendingIssuesId: {
        in: issuesIds,
      },
    },
    data: {
      resubmitted: true,
      resubmittedById: currentUser.staff.id,
    },
  });

  return {
    message: "Issues resubmitted successfully.",
    variant: "success",
  };
}

export async function getIssues(
  skip: number,
  amount: number,
  filter: any,
  orderBy: any
) {
  const issues = await prisma.issues.findMany({
    skip,
    take: amount,
    where: {
      ...filter,
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

  return issues;
}

export async function editIssue({ viewPortId, issue }: EditIssueProps) {
  const currentUser = await getCurrentStaff();

  const currentEvent = await getCurrentEvent(["issues"]);
  if (!currentEvent) {
    throw new Error("Issues was not Edited. No event is currently active.");
  }

  issue = issue as IssuesFormPropsValue & {
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
      throw new Error(
        "Issues was not Edited. An error occurred while uploading the image."
      );
    }

    issue.imageLink = response.data.url;
  }

  const edited = await prisma.pendingIssues.update({
    where: {
      id: issue.id,
    },
    data: {
      name: issue.name,
      group: issue.group,
      act: issue.act,
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

export async function deleteIssues(
  viewPortId: IssuesViewType | FramesViewType,
  issuesIds: [string, ...string[]],
  password: string
) {
  const currentUser = await getCurrentStaff();

  if (password !== "test") {
    throw new Error("Issues were not deleted. Incorrect password.");
  }

  if (viewPortId === "released-issues") {
    // await prisma.issues.deleteMany({
    //   where: {
    //     id: {
    //       in: issuesIds,
    //     },
    //   },
    // });
  } else {
    // await prisma.pendingIssues.deleteMany({
    //   where: {
    //     id: {
    //       in: issuesIds,
    //     },
    //   },
    // });
  }

  return {
    message: "Issues deleted successfully.",
  };
}
