import { Note } from './note';

export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): void {
        let rawData = JSON.stringify(notes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }

    public loadNotes(): Note[] {
        let rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY);
        let data = JSON.parse(rawData);
        let notes = new Array<Note>();

        return notes.map(r => new Note(r.text));
    }
}
