import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: ':id',
        component: BookmarkDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
