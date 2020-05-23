import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {HomePageComponent} from './pages/content/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent,
    children: [
      {path: ':id', component: ArticlesComponent},
      {path: 'topic/:name', component: AboutComponent}
    ]
  },
  { path: 'infos', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
