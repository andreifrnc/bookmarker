import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getBookmarksList } from './store/actions/bookmark.actions';
import { selectBookmarksList } from './store/selectors/bookmark.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'bookmarker';

  // TODO create bookmark type
  bookmarksList$ = this.store.select(selectBookmarksList);

  // use type
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(getBookmarksList());
  }
}
