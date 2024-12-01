import { createAction, props } from '@ngrx/store';
import { BookmarkInterface } from '../reducers/bookmark.reducer';

export const getBookmarksList = createAction(
  '[App Component] Get bookmarks list'
);

export const loadBookmarksListSuccess = createAction(
  '[Bookmark API] Bookmarks List Load Success',
  props<{ bookmarks: BookmarkInterface[] }>()
);

export const loadBookmarksListFailure = createAction(
  '[Bookmark API] Bookmarks List Load Failure',
  props<{ error: string }>()
);
