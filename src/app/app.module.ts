import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ParagraphComponent,
    FormsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
