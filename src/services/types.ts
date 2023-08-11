export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type PaginatedEntity<T> = {
  pagination: Pagination
  items: T[]
}
