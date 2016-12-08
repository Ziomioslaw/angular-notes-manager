import { Injectable } from '@angular/core';

import { Note } from '../entities/note';
import { LocalStorageService } from './local.storage';
import { IdGeneratorService } from './id.generator';

@Injectable()
export class NoteService {
    constructor(
        private storageService: LocalStorageService,
        private idGeneratorService: IdGeneratorService
    ) {
    }

    getNotes(): Promise<Note[]> {
        return Promise.resolve(this.storageService.loadNotes())
            .then(notes => {
                notes.forEach(n => this.idGeneratorService.checkNumber(n.id));

                return notes;
            });
    }

    saveNotes(notes: Note[]): Promise<Note[]> {
        return new Promise((resolve, reject) => {
                this.storageService.saveNotes(notes);
                resolve(notes);
            });
    }

    createNote(): Note {
        return new Note('', this.idGeneratorService.getIdForNew());
    }
}
