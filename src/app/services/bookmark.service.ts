import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private itemsUrl = 'api/bookmarks';  // URL to web api

  constructor(private http: HttpClient) { }

  getBookmarksList(){
    return this.http.get<any[]>(this.itemsUrl);
}
}
