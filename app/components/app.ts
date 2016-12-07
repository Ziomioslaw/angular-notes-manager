import { Component, Input } from '@angular/core';
import { Note } from '/app/note';

@Component({
  selector: 'app',
  templateUrl: '/app/templates/app.html'
})

export class AppComponent {
    @Input() selectedNote: Note;

    selectedNoteChange(note: Note) {
        this.selectedNote = note;
    }
}
