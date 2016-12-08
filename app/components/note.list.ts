import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Note } from '../note';

@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: '/app/templates/note.list.html',
  styleUrls: [ '../styles/note.list.css' ]
})
export class NoteListComponent {
    @Input() notes: Note[];
    @Output() noteSelectionChange: EventEmitter<Note> = new EventEmitter<Note>();

    selectNote(note: Note): boolean {
        this.noteSelectionChange.emit(note);

        return false;
    }
}