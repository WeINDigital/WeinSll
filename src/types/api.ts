export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string | null;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};
