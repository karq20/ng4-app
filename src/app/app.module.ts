import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyservService} from './myserv.service';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MyservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
