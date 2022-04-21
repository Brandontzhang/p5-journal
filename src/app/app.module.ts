import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { JournalComponent } from './components/journal/journal.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { DatebarComponent } from './components/datebar/datebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    JournalComponent,
    TextEditorComponent,
    DatebarComponent,
    ButtonMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    AutoSizeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
