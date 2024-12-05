import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { BookmarkInterface } from 'src/app/store/reducers/bookmark.reducer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  items: BookmarkInterface[] = [
    { link: 'https://angular.dev/', name: 'Angular', id: '1' },
    { link: 'https://ngrx.io/', name: 'NgRX', id: '2' },
  ];

  constructor() {}

  createDb() {
    return { bookmarks: this.items };
  }

  get(reqInfo: any): Observable<any> {
    if (reqInfo.collectionName === 'bookmarks') {
      const query = reqInfo.query.get('search');
      let bookmarks = this.items;

      if (query) {
        bookmarks = bookmarks.filter((item: any) => {
          if (item.link.includes(query) || item.name.includes(query)) {
            return item;
          }
        });
      }

      if (reqInfo.id) {
        const bookmark = bookmarks.find((item: any) => item.id === reqInfo.id);
        return reqInfo.utils.createResponse$(() => ({
          body: bookmark || {
            error: `Bookmark with id ${reqInfo.id} not found`,
          },
          status: bookmark ? 200 : 404,
        }));
      }

      return reqInfo.utils.createResponse$(() => ({
        body: bookmarks,
        status: 200,
      }));
    }
    return of();
  }

  post(reqInfo: any): Observable<any> {
    if (reqInfo.collectionName === 'bookmarks') {
      let bookmarks = reqInfo.collection;
      let maxId = this.items.reduce(
        (max: any, item: any) => Math.max(max, parseInt(item.id, 10)),
        0
      );
      let bookmarkData = reqInfo.req.body;

      let newBookmark = Object.assign({}, bookmarkData, {
        id: JSON.stringify(maxId + 1),
      });
      this.items = [...this.items, newBookmark];
      return reqInfo.utils.createResponse$(() => ({
        body: bookmarks,
        status: 200,
      }));
    }
    return of();
  }

  put(reqInfo: any): Observable<any> {
    if (reqInfo.collectionName === 'bookmarks') {
      let bookmarks = this.items;
      let bookmarkId = reqInfo.id;
      let newBookmarkData = Object.assign({}, reqInfo.req.body, {
        id: bookmarkId,
      });

      this.items = bookmarks.map((bookmark: BookmarkInterface) => {
        if (bookmark.id === bookmarkId) {
          bookmark = newBookmarkData;
          return bookmark;
        }
        return bookmark;
      });

      return reqInfo.utils.createResponse$(() => ({
        body: newBookmarkData,
        status: 200,
      }));
    }
    return of();
  }
}
