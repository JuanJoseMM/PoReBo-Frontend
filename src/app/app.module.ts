import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralBarComponent } from './shared/lateral-bar/lateral-bar/lateral-bar.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ListDocumentsComponent } from './shared/list-documents/list-documents.component';
import { AddDocumentsComponent } from './shared/add-documents/add-documents.component';
import { RegisterDocComponent } from './modules/register-doc/register-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralBarComponent,
    LoginComponent,
    HomeComponent,
    ListDocumentsComponent,
    AddDocumentsComponent,
    RegisterDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
