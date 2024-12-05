import { createReducer, on } from '@ngrx/store';
import {
  clearBookmarkData,
  createBookmarkSuccess,
  editBookmark,
  editBookmarkSuccess,
  loadBookmarkData,
  loadBookmarksListSuccess,
} from '../actions/bookmark.actions';

export interface BookmarkInterface {
  id?: string;
  name: string;
  link: string;
}

export interface BookmarksState {
  bookmarks: BookmarkInterface[];
  bookmarkData: BookmarkInterface;
}

export const initialState: BookmarksState = {
  bookmarks: [],
  bookmarkData: {} as BookmarkInterface,
};

export const bookmarksReducer = createReducer(
  // Supply the initial state
  initialState,
  on(loadBookmarksListSuccess, (state, { bookmarks }) => {
    return {
      ...state,
      bookmarks: bookmarks,
    };
  }),
  on(loadBookmarkData, (state, { bookmarkData }) => {
    const newstate = { ...state, bookmarkData };
    return newstate;
  }),
  on(createBookmarkSuccess, (state, { bookmarkData }) => {
    const updatedBookmarks = state.bookmarks.map((bookmark) =>
      bookmark.id === bookmarkData.id ? bookmarkData : bookmark
    );
    const newState = {
      ...state,
      bookmarks: updatedBookmarks,
    };
    return newState;
  }),
  on(editBookmarkSuccess, (state, { bookmarkData }) => {
    const updatedBookmarks = state.bookmarks.map((bookmark) =>
      bookmark.id === bookmarkData.id ? bookmarkData : bookmark
    );

    const newState = {
      ...state,
      bookmarks: updatedBookmarks,
    };
    return newState;
  }),
  on(clearBookmarkData, (state: any) => {
    const newState = { ...state, bookmarkData: {} };
    return newState;
  }),);
