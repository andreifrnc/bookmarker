import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  exhaustMap,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { BookmarkService } from 'src/app/services/bookmark.service';
import {
  addBookmark,
  createBookmarkSuccess,
  editBookmark,
  editBookmarkSuccess,
  getBookmarkData,
  getBookmarksList,
  loadBookmarkData,
  loadBookmarksListSuccess,
  searchBookmark,
} from '../actions/bookmark.actions';
import { BookmarkInterface } from '../reducers/bookmark.reducer';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable()
export class BookmarksEffects {
  private router = inject(Router);
  constructor(
    private actions$: Actions,
    private bookmarkService: BookmarkService
  ) {}

  getBookmarksList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookmarksList),
      mergeMap(() =>
        this.bookmarkService.getBookmarksList().pipe(
          map((bookmarks) => {
            return loadBookmarksListSuccess({ bookmarks });
          })
        )
      )
    )
  );

  searchBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchBookmark),
      switchMap((a) => {
        return this.bookmarkService
          .searchBookmarks(a.bookmarkName ? a.bookmarkName : '')
          .pipe(
            map((result) => {
              return loadBookmarksListSuccess({ bookmarks: result });
            })
          );
      })
    )
  );

  addBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBookmark),
      mergeMap((data) => {
        return this.bookmarkService
          .addBookmark(data.bookmark as BookmarkInterface)
          .pipe(
            map((result) => {
              return createBookmarkSuccess({ bookmarkData: result});
            }),
            tap(() => {
              this.router.navigate(['/']);
            })
          );
      })
    )
  );

  editBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editBookmark),
      mergeMap((data) => {
        return this.bookmarkService
          .editBookmark(data.bookmark as BookmarkInterface, data.id)
          .pipe(
            //response should be updated
            map((result) => {
              return editBookmarkSuccess({ bookmarkData: result });
            }),
            tap(() => {
              this.router.navigate(['/']);
            })
          );
      })
    )
  );

  getBookmarkData = createEffect(() =>
    this.actions$.pipe(
      ofType(getBookmarkData),
      mergeMap((data) => {
        return this.bookmarkService.getBookmarkData(data.bookmarkId).pipe(
          map((bookmarkData) => {
            return loadBookmarkData({ bookmarkData });
          })
        );
      })
    )
  );
}
