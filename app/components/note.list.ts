import { Component, OnInit }   from '@angular/core';

import { Note } from 'app/note';
import { NoteService } from 'app/services/note';

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: '/app/templates/note.list.html',
  providers: [ NoteService ]
})

export class NoteListComponent implements OnInit {
    notes: Note[];

    constructor(private noteService: NoteService) { }

    ngOnInit() {
        this.notes = this.noteService.getAll();
    }
}
