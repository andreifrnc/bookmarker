import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { BookmarksState } from '../reducers/bookmark.reducer';

export const selectBookmarks = (state: AppState) => {
  console.log(state)
  return state.bookmarks};
export const selectBookmarksList = createSelector(
  selectBookmarks,
  (state: BookmarksState) => {
    console.log(state)
    return state.bookmarks}
);
