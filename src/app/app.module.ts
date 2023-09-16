import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LateralBarComponent } from './shared/lateral-bar/lateral-bar/lateral-bar.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ListDocumentsComponent } from './shared/list-documents/list-documents.component';
import { AddDocumentsComponent } from './shared/add-documents/add-documents.component';
import { RegisterDocComponent } from './modules/register-doc/register-doc.component';
import { AddDenunciaComponent } from './shared/add-denuncia/add-denuncia.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralBarComponent,
    LoginComponent,
    HomeComponent,
    ListDocumentsComponent,
    AddDocumentsComponent,
    RegisterDocComponent,
    AddDenunciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
