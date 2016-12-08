import { Note } from '../note';

export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): void {
        let rawData = JSON.stringify(notes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }

    public loadNotes(): Note[] {
        let rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY);
        if (!rawData) {
            return [];
        }

        let data = JSON.parse(rawData);

        return data.map((r:any) => new Note(r.text));
    }
}
