import { Component, Input } from '@angular/core';
import { Note } from '../entities/note';
import { NoteService } from '../services/note';
import { IntervalService } from '../services/interval';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: '/app/templates/app.html',
    providers: [ NoteService, IntervalService ],
    styleUrls: [ '../styles/app.css' ]
})
export class AppComponent {
    private static readonly INTERVAL_TIME = 5000;

    @Input() selectedNote: Note;
    notes: Note[] = null;
    isSavingInProgress: boolean = false;

    constructor(
            private noteService: NoteService,
            private intervalService: IntervalService
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
        this.selectedNote = note;
    }

    addNote(event: any) {
        const newNote = this.noteService.createNote();

        this.notes.push(newNote);
        this.selectedNoteChange(newNote);
    }

    saveNoteButtonClick(event: any) {
        if (this.isSavingInProgress) {
            return;
        }

        this.saveNotes()
            .then(() => this.startTimeInterval());
    }

    private setNotes(notes: Note[]) {
        this.notes = notes;
        if (this.notes.length === 0) {
            this.notes.push(this.noteService.createNote());
        }

        this.selectedNoteChange(this.notes[0]);
    }

    private startTimeInterval() {
        this.intervalService.clearInterval();
        this.intervalService.setInterval(AppComponent.INTERVAL_TIME, () => this.saveNotes());
    }

    private saveNotes(): Promise<Note> {
        this.isSavingInProgress = true;

        return this.noteService.saveNotes(this.notes)
            .then(() => this.isSavingInProgress = false);
    }
}
