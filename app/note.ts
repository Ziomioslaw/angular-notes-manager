let nextId = 1;

export class Note {
    id: number;
    constructor(public text: string) {
        this.id = nextId++;
    }
}
