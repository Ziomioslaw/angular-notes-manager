import { Component, OnInit }   from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'templates/note.list.html',
  providers: [ NoteService ]
})

export class NoteListComponent implements OnInit {
    notes: Note[];
    selectedNote: Note;

    constructor(private service: NoteService) { }

    ngOnInit() {
        this.notes = this.service.getAll();
    }

    selectHero(note: Note) {
        this.selectedNote = note;
    }
}
