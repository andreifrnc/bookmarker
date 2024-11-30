import { Component } from '@angular/core';
import { BookmarkService } from './services/bookmark.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getBookmarksList } from './store/actions/bookmark.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'bookmarker';

  // TODO create bookmark type
  bookmarksList$ = this.store.select(selectBookmarksList);

  // use type
  constructor(private store: Store<any>) {
      this.store.dispatch(getBookmarksList());
    // this.bookmarksService.getBookmarksList().subscribe(data => console.log(data));
  }
}
