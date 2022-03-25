import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { FormsModule } from '@angular/forms';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue : 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
