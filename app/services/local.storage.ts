import { Note } from '../entities/note';

export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): void {
        let rawData = JSON.stringify(notes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }

    public loadNotes(): Promise<Note[]> {
        return Promise.resolve(localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY))
            .then(rawData => {
                if (!rawData) {
                    return [];
                }

                let rawNotes = JSON.parse(rawData);

                return rawNotes.map((r:any) => new Note(r.text, r.id));
            });
    }
}
