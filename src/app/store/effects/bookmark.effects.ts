import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  exhaustMap,
  mergeMap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
// import { selectAllTodos } from './todo.selectors';
import { BookmarkService } from 'src/app/services/bookmark.service';
import {
  getBookmarksList,
  loadBookmarksListSuccess,
} from '../actions/bookmark.actions';
import { AppState } from 'src/app/app.state';

@Injectable()
export class BookmarksEffects {
  constructor(
    private actions$: Actions,
    // private store: Store<AppState>,
    private bookmarkService: BookmarkService
  ) {}
  getBookmarksList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookmarksList),
      mergeMap(() =>
        this.bookmarkService.getBookmarksList().pipe(
          map((bookmarks) => {
            console.log(bookmarks);
            return loadBookmarksListSuccess({ bookmarks });
          })
        )
      )
    )
  );
}
