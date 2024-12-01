import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/data-service/in-memory-data.service';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { bookmarksReducer } from './store/reducers/bookmark.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookmarksEffects } from './store/effects/bookmark.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    HttpClientModule,
    EffectsModule.forRoot([BookmarksEffects]),
    StoreModule.forRoot({ bookmarks: bookmarksReducer }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
