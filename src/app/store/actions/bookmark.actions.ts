import { createAction, props } from '@ngrx/store';
import { BookmarkInterface } from '../reducers/bookmark.reducer';

export const getBookmarksList = createAction(
  '[App Component] Get bookmarks list'
);

export const searchBookmark = createAction(
  '[App Component] Search bookmark',
  props<{ bookmarkName: string | null }>()
);

export const addBookmark = createAction(
  '[Bookmark Details] Add bookmark',
  props<{ bookmark: BookmarkInterface }>()
);

export const editBookmark = createAction(
  '[Bookmark Details] Edit bookmark action',
  props<{ bookmark: BookmarkInterface, id: string }>()
);

export const getBookmarkData = createAction(
  '[Bookmark Details] Get bookmark data',
  props<{ bookmarkId: string }>()
)

export const loadBookmarkData = createAction(
  '[Bookmark API] Bookmark data',
  props<{ bookmarkData: BookmarkInterface }>()
);

export const createBookmarkSuccess = createAction(
  '[Bookmark Details] Create Bookmark Success',
  props<{ bookmarkData: BookmarkInterface }>()
);

export const clearBookmarkData = createAction(
  '[Bookmark Details] Clear bookmark data'
)

export const editBookmarkSuccess =  createAction(
  '[Bookmark API] Edit bookmark Success',
  props<{ bookmarkData: BookmarkInterface }>()
);

export const loadBookmarksListSuccess = createAction(
  '[Bookmark API] Bookmarks List Load Success',
  props<{ bookmarks: BookmarkInterface[] }>()
);

export const loadBookmarksListFailure = createAction(
  '[Bookmark API] Bookmarks List Load Failure',
  props<{ error: string }>()
);
