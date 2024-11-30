import { inject, Injectable } from "@angular/core";
import { ActionsSubject, Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { BookmarkService } from "src/app/services/bookmark.service";
import { createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class BookmarkEffect {

  private store$ = inject(Store<AppState>)
  private actions$ = inject(ActionsSubject)
  private bookmarkService$ = inject(BookmarkService)
  constructor() {}

  loadBookmarks = createef
}
