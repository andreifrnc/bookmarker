import { createReducer, on } from '@ngrx/store';
import {
  getBookmarksList,
  loadBookmarksListSuccess,
} from '../actions/bookmark.actions';
// import { addTodo, loadTodosFailure, loadTodosSuccess, removeTodo } from '../actions/bookmark.actions';

export interface BookmarkInterface {
  name: string;
  link: string;
}

export interface BookmarksState {
  bookmarks: BookmarkInterface[];
}

export const initialState: BookmarksState = {
  bookmarks: [],
};

export const bookmarksReducer = createReducer(
  // Supply the initial state
  initialState,
  on(loadBookmarksListSuccess, (state, { bookmarks }) => {
    console.log('reducer', bookmarks);

    return {
      ...state,
      bookmarks: bookmarks,
    };
  })
);
