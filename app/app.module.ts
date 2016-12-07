import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app';
import { NoteDetailComponent } from './components/note.detail';
import { NoteListComponent } from './components/note.list';

import { LocalStorageService } from 'app/services/local.storage';
import { NoteService } from 'app/services/note';

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
