import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {LoginComponent} from './pages/content/admin/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent,
    children: [
      {path: ':id', component: ArticlesComponent},
      {path: ':name', component: ArticlesComponent}
    ]
  },
  { path: 'infos', component: AboutComponent },
  { path: 'admin', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
