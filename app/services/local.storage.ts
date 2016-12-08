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

    public deleteNote(note: Note): void {
        const allNotes = this.loadRawDataFromLocalStorage();
        const noteWithoutOne = allNotes.filter((x:any) => x.id != note.id);

        this.saveRawDataIntoLocalStorage(noteWithoutOne);
    }

    public loadNotes(): Note[] {
        return this.loadRawDataFromLocalStorage()
            .map((r:any) => new Note(r.text, r.id));
    }

    private loadRawDataFromLocalStorage(): any[] {
        const rawData = localStorage.getItem(LocalStorageService.LOCAL_STORAGE_KEY)
        if (!rawData) {
            return [];
        }

        return JSON.parse(rawData);
    }

    private saveRawDataIntoLocalStorage(rawNotes: any[]) {
console.log('>>>', rawNotes);
        let rawData = JSON.stringify(rawNotes);

        localStorage.setItem(LocalStorageService.LOCAL_STORAGE_KEY, rawData);
    }
}
