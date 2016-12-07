import { Injectable } from '@angular/core';

import { Note } from './note';

@Injectable()
export class NoteService {
  private notes: Note[] = [];

  constructor() {
      this.notes.push(new Note("sdsdsd"));
  }

  getAll() {
    return this.notes;
  }
}
