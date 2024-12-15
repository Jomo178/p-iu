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
      event: true,
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
      event: true,
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

  try {
    await prisma.$transaction([
      prisma.pendingIssues.updateMany({
        where: {
          id: {
            in: issuesIds,
          },
        },
        data: {
          approvedAt: new Date(),
          approvedById: currentUser.staff.id,
        },
      }),
    ]);

    return {
      message: "Issues approved successfully.",
      variant: "success",
    };
  } catch (error) {
    console.error("Error approving pending issues:", error);
    return {
      message: "Failed to approve some or all issues.",
      variant: "destructive",
    };
  }
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
      event: true,
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

export async function getReleasedIssues(
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
      event: true,
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
        "Issue was not Edited. An error occurred while deleting the image."
      );
    }

    const response = await utapi.uploadFiles(issue.image);

    if (response.error?.code || !response.data) {
      throw new Error(
        "Issue was not Edited. An error occurred while uploading the image."
      );
    }

    issue.imageLink = response.data.url;
  }

  let edited;
  const data = {
    name: issue.name,
    group: issue.group,
    act: issue.act,
    rarity: issue.rarity,
    code: issue.code,
    image: issue.imageLink,
  };
  const include = {
    createdBy: true,
    approvedBy: true,
    rejections: {
      include: {
        rejectedBy: true,
        resubmittedBy: true,
      },
    },
  };

  if (viewPortId === "released-issues") {
    edited = await prisma.issues.update({
      where: {
        id: issue.id,
      },
      data,
      include,
    });

    return {
      message: "Issue was successfully Edited.",
      issue: edited,
    };
  } else {
    edited = await prisma.pendingIssues.update({
      where: {
        id: issue.id,
      },
      data,
      include,
    });
  }

  return {
    message: "Issue was successfully Edited.",
    issue: edited,
  };
}

export async function deleteIssues(
  viewPortId: IssuesViewType | FramesViewType,
  issues: { id: string; image: string }[],
  password: string
) {
  if (issues.length == 0) return { message: "No issues selected." };
  const currentUser = await getCurrentStaff();

  if (password !== "iu-delete-issues") {
    throw new Error("Issues were not deleted. Incorrect password.");
  }

  const deleteImages = await utapi.deleteFiles(
    issues
      .map((issue) => issue.image.split("/").pop())
      .filter((image): image is string => !!image)
  );

  if (viewPortId === "released-issues") {
    await prisma.issues.deleteMany({
      where: {
        id: {
          in: issues.map((issue) => issue.id),
        },
      },
    });
  } else {
    await prisma.pendingIssues.deleteMany({
      where: {
        id: {
          in: issues.map((issue) => issue.id),
        },
      },
    });
  }

  return {
    message: "Issues deleted successfully.",
  };
}
