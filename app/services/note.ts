import { Injectable } from '@angular/core';

import { Note } from '../entities/note';
import { LocalStorageService } from './local.storage';
import { IdGeneratorService } from './id.generator';

@Injectable()
export class NoteService {
    private notes: Note[] = null;

    constructor(
        private storageService: LocalStorageService,
        private idGeneratorService: IdGeneratorService
    ) {
    }

    getNotes(): Note[] {
        if (this.notes === null) {
            this.notes = this.storageService.loadNotes();
            this.notes.forEach(n => this.idGeneratorService.checkNumber(n.id));
        }

        return this.notes;
    }

    saveNotes(notes: Note[]): void {
        this.notes = notes;

        this.storageService.saveNotes(this.notes);
    }

    createNote(): Note {
        return new Note('', this.idGeneratorService.getIdForNew());
    }
}
