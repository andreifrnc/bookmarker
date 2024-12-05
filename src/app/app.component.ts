import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBookmarksList, searchBookmark } from './store/actions/bookmark.actions';
import { selectBookmarksList } from './store/selectors/bookmark.selector';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, filter, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'bookmarker';

  searchInput = new FormControl('');

  private store = inject(Store);

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      catchError(error => {
        return of(null);
    }),
      // @ts-ignore
      switchMap(bookmarkName =>{
        return of(this.store.dispatch(searchBookmark({ bookmarkName: bookmarkName as string })));
      })
    ).subscribe();
  }

}
