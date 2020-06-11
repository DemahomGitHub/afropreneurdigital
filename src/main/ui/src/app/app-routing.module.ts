import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {LoginComponent} from './pages/content/admin/login/login.component';
import {ArticleCreationComponent} from './pages/content/admin/article-creation/article-creation.component';
import {ArticleUpdateDeletionComponent} from './pages/content/admin/article-update-deletion/article-update-deletion.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent,
    children: [
      {path: ':id', component: ArticlesComponent},
      {path: ':name', component: ArticlesComponent}
    ]
  },
  { path: 'infos', component: AboutComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'admin/articles/add', component: ArticleCreationComponent },
  { path: 'admin/articles/all', component: ArticleUpdateDeletionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
