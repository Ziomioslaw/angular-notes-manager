import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app',
    templateUrl: '/app/templates/app.html',
    styleUrls: [ '/app/styles/app.css' ]
})
export class AppComponent {
    @Input() selectedNote: Note;

    selectedNoteChange(note: Note) {
        this.selectedNote = note;
    }
}
