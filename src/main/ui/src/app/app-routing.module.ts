import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticlesComponent} from './pages/content/articles/articles.component';
import {AboutComponent} from './pages/content/about/about.component';
import {LoginComponent} from './pages/content/admin/login/login.component';
import {ArticleCreationComponent} from './pages/content/admin/article-creation/article-creation.component';
import {ArticleUpdateDeletionComponent} from './pages/content/admin/article-update-deletion/article-update-deletion.component';
import {CanActivateAdmin} from './services/CanActivateAdmin';
import {ArticleDetailsComponent} from './pages/content/article-details/article-details.component';
import {ContactComponent} from './pages/content/contact/contact.component';
import {PageNotFoundComponent} from './pages/content/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'infos', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/articles/add', component: ArticleCreationComponent, canActivate: [CanActivateAdmin] },
  { path: 'admin/articles/all', component: ArticleUpdateDeletionComponent, canActivate: [CanActivateAdmin] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
