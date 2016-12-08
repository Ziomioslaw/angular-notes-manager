import { Injectable } from '@angular/core';

import { Note } from '../note';
import { LocalStorageService } from '../services/local.storage'

@Injectable()
export class NoteService {
    private notes: Note[] = null;

    constructor(private storageService: LocalStorageService) {}

    getNotes(): Note[] {
        if (this.notes === null) {
            this.notes = this.storageService.loadNotes();
        }

        return this.notes;
    }

    saveNotes(notes: Note[]): void {
        this.notes = notes;

        this.storageService.saveNotes(this.notes);
    }
}
