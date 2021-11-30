import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './library/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './components/layouts/base-layout/base-layout.component';
import { MaterialModule } from './library/modules/material/material-module';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FormsModule } from '@angular/forms';
import { AddContactModalComponent } from './components/shared/add-contact-modal/add-contact-modal.component';
import { AppModalsComponent } from './components/shared/app-modals/app-modals.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    ContactPageComponent,
    AboutPageComponent,
    AddContactModalComponent,
    AppModalsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
