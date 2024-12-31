import { Prisma } from "@prisma/client";

const itemsInclude = {
  createdBy: true,
  approvedBy: true,
  event: true,
  rejections: {
    include: {
      rejectedBy: true,
      resubmittedBy: true,
    },
  },
} as const;

export type IssuesWithRelation = Prisma.IssuesGetPayload<{
  include: typeof itemsInclude;
}>;

export type FramesWithRelation = Prisma.FramesGetPayload<{
  include: typeof itemsInclude;
}>;

export type FontsWithRelation = Prisma.FontsGetPayload<{
  include: typeof itemsInclude;
}>;

export type PendingIssuesWithRelation = Prisma.PendingIssuesGetPayload<{
  include: typeof itemsInclude;
}>;

export type PendingFramesWithRelation = Prisma.PendingFramesGetPayload<{
  include: typeof itemsInclude;
}>;

export type PendingFontsWithRelation = Prisma.FontsGetPayload<{
  include: typeof itemsInclude;
}>;

export type EventsWithRelation = Prisma.EventsGetPayload<{
  include: {
    createdBy: true;
    issues: true;
    frames: true;
    fonts: true;
    pendingFrames: {
      where: {
        rejections: {
          every: {
            resubmitted: true;
          };
        };
      };
    };
    pendingIssues: {
      where: {
        rejections: {
          every: {
            resubmitted: true;
          };
        };
      };
    };
    pendingFonts: {
      where: {
        rejections: {
          every: {
            resubmitted: true;
          };
        };
      };
    };
  };
}>;
