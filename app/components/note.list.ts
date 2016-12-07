import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from 'app/note';
import { NoteService } from 'app/services/note';

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: '/app/templates/note.list.html',
  providers: [ NoteService ],
  styleUrls: [ '../styles/note.list.css' ]
})
export class NoteListComponent implements OnInit {
    @Output() noteSelectionChange: EventEmitter<Note> = new EventEmitter<Note>();
    notes: Note[];

    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.notes = this.noteService.getAll();
    }

    selectNote(note: Note): boolean {
        this.noteSelectionChange.emit(note);

        return false;
    }
}
