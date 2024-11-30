import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { BookmarkState } from './store/reducers/bookmark.reducer';

export interface AppState {
  bookmarks: BookmarkState
}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
