import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';
import { BookmarsDashboardComponent } from './components/bookmars-dashboard/bookmars-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BookmarsDashboardComponent },
      { path: 'create', component: BookmarkDetailsComponent },
      { path: ':id', component: BookmarkDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
