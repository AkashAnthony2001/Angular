import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Person } from 'src/app/modules/Classes'

@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [Person],
  bootstrap: [AppComponent]

})
export class AppModule { }
