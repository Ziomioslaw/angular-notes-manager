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

    getNotes(): Promise<Note[]> {
        return this.storageService
            .loadNotes()
            .then(notes => {
                notes.forEach(n => this.idGeneratorService.checkNumber(n.id));

                return notes;
            });
    }

    saveNotes(notes: Note[]): void {
        this.notes = notes;
        this.storageService.saveNotes(this.notes);
    }

    createNote(): Note {
        return new Note('', this.idGeneratorService.getIdForNew());
    }
}
