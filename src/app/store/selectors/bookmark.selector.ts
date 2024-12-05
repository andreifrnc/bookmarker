import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { BookmarksState } from '../reducers/bookmark.reducer';

export const selectBookmarks = (state: AppState) => {
  return state.bookmarks;
};
export const selectBookmarkData = createSelector(
  selectBookmarks,
  (state: BookmarksState) => state.bookmarkData // Accessing bookmarkData from BookmarksState
);

export const selectBookmarksList = createSelector(
  selectBookmarks,
  (state: BookmarksState) => {
    return state.bookmarks;
  }
);

export const selectBookmark = createSelector(
  selectBookmarkData,
  (bookmarkData) => {
    return bookmarkData;
  }
)
