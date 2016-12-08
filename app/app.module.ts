import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app';
import { NoteDetailComponent } from './components/note.detail';
import { NoteListComponent } from './components/note.list';

import { NoteTitlePipe } from './pipes/note.title.pipe';

import { IntervalService } from './services/interval';
import { IdGeneratorService } from './services/id.generator';
import { LocalStorageService } from './services/local.storage';
import { BrowserInteractionService } from './services/browser.interaction';
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
        IdGeneratorService,
        NoteService,
        IntervalService,
        BrowserInteractionService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
