import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ItemListComponent } from './item-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
