import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from '../entities/note';

@Component({
    moduleId: module.id,
    selector: 'note-detail',
    templateUrl: '/app/templates/note.detail.html',
    styleUrls: [ '../styles/note.detail.css' ]
})
export class NoteDetailComponent implements OnChanges {
    private readonly pattern = /https?:\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png|bmp)/gi;

    @Input() note: Note;

    images: string[] = [];

    onKey(event: any): void {
        this.note.text = event.target.value;
        this.images = this.findAllPicturesInText(this.note.text);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.refreshImagesFromNote();
    }

    private refreshImagesFromNote() {
        this.images = this.findAllPicturesInText(this.note.text);
    }

    private findAllPicturesInText(text: string) {
        const results = Array<string>();
        let found = null;
        let url = null;

        while (found = this.pattern.exec(text)) {
            url = found[0]
            if (results.indexOf(url) == -1) {
                results.push(url);
            }
        }

        return results;
    }
}
