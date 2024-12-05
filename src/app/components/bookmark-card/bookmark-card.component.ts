import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookmarkInterface } from 'src/app/store/reducers/bookmark.reducer';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.css'],
  standalone: true,
  imports:[RouterModule]
})
export class BookmarkCardComponent implements OnInit {
  @Input() bookmark!: BookmarkInterface;
  constructor() { }

  ngOnInit() {
  }

}
