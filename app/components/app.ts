import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note';

@Component({
    selector: 'app',
    templateUrl: '/app/templates/app.html',
    providers: [ NoteService ],
    styleUrls: [ '/app/styles/app.css' ]
})
export class AppComponent {
    @Input() selectedNote: Note;
    notes: Note[] = null;

    constructor(private noteService: NoteService) {
    }

    ngOnInit() {
        this.notes = this.noteService.getNotes();
        if (this.notes.length === 0) {
            this.notes.push(new Note(''));
        }

        this.selectedNote = this.notes[0];
    }

    selectedNoteChange(note: Note) {
        this.selectedNote = note;
    }

    addNote(event: any) {
        const newNote = new Note('');

        this.notes.push(newNote);
        this.selectedNoteChange(newNote);
    }

    saveNote(event: any) {
        this.noteService.saveNotes(this.notes);
    }
}
