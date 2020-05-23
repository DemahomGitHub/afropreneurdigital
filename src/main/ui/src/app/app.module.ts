import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainContentComponent } from './pages/content/main-content/main-content.component';
import { HomePageComponent } from './pages/content/home-page/home-page.component';
import { AboutComponent } from './pages/content/about/about.component';
import { ArticlesComponent } from './pages/content/articles/articles.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ArticlesDetailsComponent } from './pages/content/articles/articles-details/articles-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainContentComponent,
    HomePageComponent,
    AboutComponent,
    ArticlesComponent,
    ArticlesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
