import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {ArticlesDetailsComponent} from './pages/content/articles/articles-details/articles-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent,
    children: [
      {path: ':id', component: ArticlesComponent}
    ]
  },
  { path: 'infos', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
