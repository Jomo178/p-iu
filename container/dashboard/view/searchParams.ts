import { IssueFilterSchema } from "@/model/issues-schema";
import { createSearchParamsCache, parseAsJson } from "nuqs/server";

export const searchParams = {
  filters: parseAsJson(IssueFilterSchema.parse),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
