import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { ConvMilesToKmComponent } from './conv-miles-to-km/conv-miles-to-km.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ShowMessageComponent,
    LoopBackComponent,
    ConvMilesToKmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
