let nextId = 1;

export class Note {
    constructor(
        public text: string,
        public id: number = null)
    {
        this.id = nextId++;
    }
}
