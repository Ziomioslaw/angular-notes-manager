import { Injectable } from '@angular/core';

import { Note } from './note';
import { LocalStorageService } from './local.storage.service'

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
