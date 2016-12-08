import { Note } from '../entities/note';

export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): void {
        let rawData = JSON.stringify(notes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }

    public loadNotes(): Note[] {
        const rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY)
        if (!rawData) {
            return [];
        }

        const rawNotes = JSON.parse(rawData);

        return rawNotes.map((r:any) => new Note(r.text, r.id));
    }
}
