import { createAction, props } from '@ngrx/store';
import { BookmarkInterface } from '../reducers/bookmark.reducer';

export const getBookmarksList = createAction(
  '[App Component] Get Bookmarks List'
);

export const searchBookmark = createAction(
  '[App Component] Search Bookmark',
  props<{ bookmarkName: string | null }>()
);

export const addBookmark = createAction(
  '[Bookmark Details] Add Bookmark',
  props<{ bookmark: BookmarkInterface }>()
);

export const editBookmark = createAction(
  '[Bookmark Details] Edit Bookmark Action',
  props<{ bookmark: BookmarkInterface, id: string }>()
);

export const getBookmarkData = createAction(
  '[Bookmark Details] Get Bookmark Data',
  props<{ bookmarkId: string }>()
)

export const loadBookmarkData = createAction(
  '[Bookmark API] Bookmark Data',
  props<{ bookmarkData: BookmarkInterface }>()
);

export const createBookmarkSuccess = createAction(
  '[Bookmark Details] Create Bookmark Success',
  props<{ bookmarkData: BookmarkInterface }>()
);

export const clearBookmarkData = createAction(
  '[Bookmark Details] Clear Bookmark Data'
)

export const editBookmarkSuccess =  createAction(
  '[Bookmark API] Edit Bookmark Success',
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
