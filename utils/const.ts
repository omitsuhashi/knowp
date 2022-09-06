import { IPagination } from "../types/api";

const DEFAULT_LIMIT_SIZE = 20;
export const DEFAULT_PAGINATION_OPTIONS: IPagination = {
  index: 0,
  limit: DEFAULT_LIMIT_SIZE,
};
