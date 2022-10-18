interface PaginationInfo {
  current_page: number;
  limit_per_page: number;
  next_page: number | null;
  prev_page: number | null;
  total: number;
  total_pages: number;
}

export default PaginationInfo;
