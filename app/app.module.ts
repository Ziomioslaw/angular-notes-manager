import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app';
import { NoteDetailComponent } from './components/note.detail';
import { NoteListComponent } from './components/note.list';

import { NoteTitlePipe } from './note.title.pipe';

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
        NoteListComponent,
        NoteTitlePipe
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
