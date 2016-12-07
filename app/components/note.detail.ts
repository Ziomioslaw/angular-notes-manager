import { Component, Input } from '@angular/core';

import { Note } from 'app/note';

@Component({
    moduleId: module.id,
    selector: 'note-detail',
    templateUrl: '/app/templates/note.detail.html'
})

export class NoteDetailComponent {
  @Input() note: Note;
}
