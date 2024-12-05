import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookmarkInterface } from '../store/reducers/bookmark.reducer';

@Injectable({
providedIn: 'root',
})
export class BookmarkService {
  private itemsUrl = 'api/bookmarks'; // URL to web api

  constructor(private http: HttpClient) {}

  getBookmarksList(): Observable<BookmarkInterface[]> {
    return this.http.get<any[]>(this.itemsUrl);
  }

  addBookmark(bookmark: BookmarkInterface): Observable<BookmarkInterface> {
    return this.http.post<BookmarkInterface>(this.itemsUrl, bookmark);
  }

  editBookmark(bookmark: BookmarkInterface, id: string): Observable<BookmarkInterface> {
    const itemsUrl = `${this.itemsUrl}/${id}`
    return this.http.put<BookmarkInterface>(itemsUrl, bookmark);
  }

  searchBookmarks(searchString: string): Observable<BookmarkInterface[]> {
    return this.http.get<BookmarkInterface[]>(`${this.itemsUrl}?search=${searchString}`);
  }

  getBookmarkData(id: string): Observable<BookmarkInterface> {
    return this.http.get<BookmarkInterface>(`${this.itemsUrl}/${id}`);
  }
}

