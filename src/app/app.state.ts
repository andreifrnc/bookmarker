import { BookmarkInterface, BookmarksState } from './store/reducers/bookmark.reducer';

export interface AppState {
  bookmarks: BookmarksState;
  bookmarkData: BookmarkInterface
}
