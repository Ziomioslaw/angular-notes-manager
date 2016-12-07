import { Injectable } from '@angular/core';

import { Note } from 'app/note';
import { LocalStorageService } from 'app/services/local.storage'

@Injectable()
export class NoteService {
    private notes: Note[] = null;

    constructor(private storageService: LocalStorageService) {}

    getAll() {
        if (this.notes === null) {
            this.notes = this.storageService.loadNotes();
        }

        return this.notes;
    }
}
