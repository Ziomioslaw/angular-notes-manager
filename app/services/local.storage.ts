import { Note } from '../entities/note';

export class LocalStorageService {
    private static readonly LOCAL_STORAGE_KEY = "notes";

    public saveNotes(notes: Note[]): void {
        this.saveRawDataIntoLocalStorage(notes);
    }

    public saveNote(note: Note): void {
        const rawData = this.loadRawDataFromLocalStorage();
        const rawNote = rawData.find((x:any) => x.id == note.id);

        if (rawNote) {
            rawNote.text = note.text;
        } else {
            rawData.push(note);
        }

        this.saveRawDataIntoLocalStorage(rawData);
    }

    public loadNotes(): Note[] {
        return this.loadRawDataFromLocalStorage()
            .map((r:any) => new Note(r.text, r.id));
    }

    private loadRawDataFromLocalStorage() {
        const rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY)
        if (!rawData) {
            return [];
        }

        return JSON.parse(rawData);
    }

    private saveRawDataIntoLocalStorage(rawNotes: any) {
        let rawData = JSON.stringify(rawNotes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }
}
