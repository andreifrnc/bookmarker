import { Component, OnInit } from '@angular/core';
import { BookmarkCardComponent } from "../bookmark-card/bookmark-card.component";
import { Store } from '@ngrx/store';
import { selectBookmarksList } from 'src/app/store/selectors/bookmark.selector';
import { getBookmarksList } from 'src/app/store/actions/bookmark.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmars-dashboard',
  templateUrl: './bookmars-dashboard.component.html',
  styleUrls: ['./bookmars-dashboard.component.css'],
  imports: [BookmarkCardComponent, CommonModule],
  standalone: true,
})
export class BookmarsDashboardComponent implements OnInit {
  bookmarksList$ = this.store.select(selectBookmarksList);

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(getBookmarksList());
  }
}
