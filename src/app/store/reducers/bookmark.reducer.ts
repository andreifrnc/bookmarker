import { createReducer, on } from "@ngrx/store"
import { getBookmarksList } from "../actions/bookmark.actions"

export interface BookmarkState {
  bookmarks: BookmarkInterface[]
}

export interface BookmarkInterface {
  link: string,
  name: string,
}

export const initialState: BookmarkState = {
  bookmarks: []
}

export const bookmarkReducer = createReducer(
  initialState,
  on(getBookmarksList, (state: any) => ({
    ...state
  }))
)
