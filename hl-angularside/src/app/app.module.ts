import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';

//Services

import { ContentService } from './shared/services/content.service';
import { BuildsPageComponent } from './builds-page/builds-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'builds', component: BuildsPageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BuildsPageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
  ],
  providers: [
    ContentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
