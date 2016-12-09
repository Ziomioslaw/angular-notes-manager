import { Injectable } from '@angular/core';
import { Note } from '../entities/note';

@Injectable()
export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): Promise<Note[]> {
        return new Promise<Note[]>((resolve, reject) => {
                this.saveRawDataIntoLocalStorage(notes);
                resolve(notes);
            });
    }

    public saveNote(note: Note): Promise<Note> {
        return new Promise<Note>((resolve, reject) => {
                const rawData = this.loadRawDataFromLocalStorage();
                const rawNote = rawData.find((x:any) => x.id == note.id);

                if (rawNote) {
                    rawNote.text = note.text;
                } else {
                    rawData.push(note);
                }

                this.saveRawDataIntoLocalStorage(rawData);

                resolve(note);
            });
    }

    public deleteNote(note: Note): Promise<Note> {
        return new Promise<Note>((resolve, reject) => {
                const allNotes = this.loadRawDataFromLocalStorage();
                const noteWithoutOne = allNotes.filter((x:any) => x.id != note.id);

                this.saveRawDataIntoLocalStorage(noteWithoutOne);

                resolve(note);
            });
    }

    public loadNotes(): Promise<Note[]> {
        return new Promise<Note[]>((resolve, reject) => {
                resolve(this.loadRawDataFromLocalStorage()
                    .map((r:any) => new Note(r.text, r.id))
                );
            });
    }

    private loadRawDataFromLocalStorage(): any[] {
        const rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY)
        if (!rawData) {
            return [];
        }

        return JSON.parse(rawData);
    }

    private saveRawDataIntoLocalStorage(rawNotes: any[]) {
        let rawData = JSON.stringify(rawNotes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }
}
