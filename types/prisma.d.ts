import { Prisma } from "@prisma/client";

type PendingIssuesWithRelation = Prisma.PendingIssuesGetPayload<{
  include: {
    createdBy: true;
    approvedBy: true;
    rejections: {
      include: {
        rejectedBy: true;
        resubmittedBy: true;
      };
    };
  };
}>;

type IssuesWithRelation = Prisma.IssuesGetPayload<{
  include: {
    createdBy: true;
    approvedBy: true;
    rejections: {
      include: {
        rejectedBy: true;
        resubmittedBy: true;
      };
    };
  };
}>;

type RejectedIssuesWithRelation = Prisma.RejectionsGetPayload<{
  include: {
    rejectedBy: true;
    resubmittedBy: true;
    pendingIssues: true;
  };
}>;

type EventsWithRelation = Prisma.EventsGetPayload<{
  include: {
    createdBy: true;
  };
}>;

type PendingFramesWithRelation = Prisma.PendingFramesGetPayload<{
  include: {
    createdBy: true;
    approvedBy: true;
    rejections: {
      include: {
        rejectedBy: true;
        resubmittedBy: true;
      };
    };
  };
}>;

type FramesWithRelation = Prisma.FramesGetPayload<{
  include: {
    createdBy: true;
    approvedBy: true;
  };
}>;
