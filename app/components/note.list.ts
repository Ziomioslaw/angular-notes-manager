import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from 'app/note';
import { NoteService } from 'app/services/note';

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: '/app/templates/note.list.html',
  providers: [ NoteService ]
})
export class NoteListComponent implements OnInit {
    @Output() notify: EventEmitter<Note> = new EventEmitter<Note>();
    notes: Note[];

    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.notes = this.noteService.getAll();
    }

    selectNote(note: Note): boolean {
        this.notify.emit(note);

        return false;
    }
}
