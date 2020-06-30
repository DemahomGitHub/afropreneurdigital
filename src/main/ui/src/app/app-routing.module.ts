import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {LoginComponent} from './pages/content/admin/login/login.component';
import {ArticleCreationComponent} from './pages/content/admin/article-creation/article-creation.component';
import {ArticleUpdateDeletionComponent} from './pages/content/admin/article-update-deletion/article-update-deletion.component';
import {CanActivateAdmin} from './services/CanActivateAdmin';
import {ArticleDetailsComponent} from './pages/content/article-details/article-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles/all', pathMatch: 'full' },
  { path: 'articles/all', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'infos', component: AboutComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/articles/add', component: ArticleCreationComponent, canActivate: [CanActivateAdmin] },
  { path: 'admin/articles/all', component: ArticleUpdateDeletionComponent, canActivate: [CanActivateAdmin] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
