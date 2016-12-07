import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteDetailComponent } from './note.detail.component';
import { NoteListComponent } from './note.list.component';

import { LocalStorageService } from './services/local.storage';
import { NoteService } from './services/note';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NoteDetailComponent,
        NoteListComponent
    ],
    providers: [
        LocalStorageService,
        NoteService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
