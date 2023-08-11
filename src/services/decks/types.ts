//TODO cover
import { PaginatedEntity, Pagination } from '../types.ts'

export type CreateDecksArgs = {
  cover?: string
  name: string
  isPrivate?: boolean
}

export interface CreateDeckResponse {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: Author['id']
  orderBy?: string
  currentPage?: Pagination['currentPage']
  itemsPerPage?: Pagination['itemsPerPage']
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean
  isBlocked?: boolean
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export type DecksResponse = PaginatedEntity<Deck> & {
  maxCardsCount?: number
}
