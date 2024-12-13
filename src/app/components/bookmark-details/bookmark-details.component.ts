import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import {
  addBookmark,
  clearBookmarkData,
  editBookmark,
  getBookmarkData,
} from 'src/app/store/actions/bookmark.actions';
import { BookmarkInterface } from 'src/app/store/reducers/bookmark.reducer';
import { ActivatedRoute } from '@angular/router';
import { selectBookmarkData } from 'src/app/store/selectors/bookmark.selector';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  standalone: true,
})
export class BookmarkDetailsComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  private urlPattern =
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/i;
  bookmarkId = '';
  bookmarkForm = new FormGroup({
    name: new FormControl('', Validators.required),
    link: new FormControl('', [
      Validators.required,
      (control) =>
        this.urlPattern.test(control.value) ? null : { invalidUrl: true },
    ]),
  });

  bookmarkData$ = this.store
    .select(selectBookmarkData)
    .pipe(
      map((bookmarkData) => {
        this.bookmarkForm.controls['link'].setValue(bookmarkData.link);
        this.bookmarkForm.controls['name'].setValue(bookmarkData.name);
      })
    )
    .subscribe();

  constructor() {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.bookmarkId = params['id'];
        this.store.dispatch(getBookmarkData({ bookmarkId: params['id'] }));
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearBookmarkData());
  }

  addBookmark(): void {
    this.store.dispatch(
      addBookmark({ bookmark: this.bookmarkForm.value as BookmarkInterface })
    );
  }

  editBookmark(): void {
    this.store.dispatch(
      editBookmark({
        bookmark: this.bookmarkForm.value as BookmarkInterface,
        id: this.bookmarkId,
      })
    );
  }
}
