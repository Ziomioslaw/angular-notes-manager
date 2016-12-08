import { Component, Input } from '@angular/core';
import { Note } from '../entities/note';

import { NoteService } from '../services/note';
import { IntervalService } from '../services/interval';
import { BrowserInteractionService } from '../services/browser.interaction';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: '/app/templates/app.html',
    providers: [
        NoteService,
        IntervalService,
        BrowserInteractionService
    ],
    styleUrls: [ '../styles/app.css' ]
})
export class AppComponent {
    private static readonly INTERVAL_TIME = 5000;

    @Input() selectedNote: Note;
    notes: Note[] = null;
    isSavingInProgress: boolean = false;

    constructor(
            private noteService: NoteService,
            private intervalService: IntervalService,
            private browserInteractionService: BrowserInteractionService
        ) {
        this.setNotes([]);
    }

    ngOnInit() {
        this.noteService
            .getNotes()
            .then(notes => {
                this.setNotes(notes);
                this.startTimeInterval();
            });
    }

    selectedNoteChange(note: Note) {
        this.saveNote(this.selectedNote);
        this.selectedNote = note;
    }

    addNoteButtonClick(event: any) {
        const newNote = this.noteService.createNote();

        this.notes.push(newNote);
        this.selectedNoteChange(newNote);
    }

    saveNoteButtonClick(event: any) {
        if (this.isSavingInProgress) {
            return;
        }

        this.saveNote(this.selectedNote)
            .then(() => this.startTimeInterval());
    }

    deleteNoteButtonClick(event: any) {
        if (!this.browserInteractionService.question('Do you realy wish to delete the note?')) {
            return;
        }

        // TODO:
        //this.noteService.deleteNote(this.selectedNote)
        //    .then(() => this.setNotes(this.notes));
    }

    private setNotes(notes: Note[]) {
        this.notes = notes;
        if (this.notes.length === 0) {
            this.notes.push(this.noteService.createNote());
        }

        this.selectedNote = this.notes[0];
    }

    private startTimeInterval() {
        this.intervalService.clearInterval();
        this.intervalService.setInterval(
                AppComponent.INTERVAL_TIME,
                () => this.saveNote(this.selectedNote)
            );
    }

    private saveNote(note: Note): Promise<Note> {
        this.isSavingInProgress = true;

        return this.noteService.saveNote(note)
            .then(() => this.isSavingInProgress = false);
    }
}
