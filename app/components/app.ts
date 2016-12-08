import { Component, Input } from '@angular/core';
import { Note } from '../entities/note';
import { NoteService } from '../services/note';
import { IntervalService } from '../services/interval';

@Component({
    selector: 'app',
    templateUrl: '/app/templates/app.html',
    providers: [ NoteService ],
    styleUrls: [ '/app/styles/app.css' ]
})
export class AppComponent {
    private static readonly INTERVAL_TIME = 5000;

    @Input() selectedNote: Note;
    notes: Note[] = null;

    constructor(
            private noteService: NoteService,
            private intervalService: IntervalService
        ) {
        intervalService.setInterval(AppComponent.INTERVAL_TIME, () => this.saveNote(null));
    }

    ngOnInit() {
        this.notes = this.noteService.getNotes();
        if (this.notes.length === 0) {
            this.notes.push(this.noteService.createNote());
        }

        this.selectedNote = this.notes[0];
    }

    selectedNoteChange(note: Note) {
        this.selectedNote = note;
    }

    addNote(event: any) {
        const newNote = this.noteService.createNote();

        this.notes.push(newNote);
        this.selectedNoteChange(newNote);
    }

    saveNote(event: any) {
        this.noteService.saveNotes(this.notes);
    }
}
