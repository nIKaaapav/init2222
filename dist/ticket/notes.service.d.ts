export declare class NotesService {
    constructor();
    getNotes(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    createNote(note: any): Promise<void>;
    remove(id: string): Promise<void>;
    editNote(id: number, note: any): Promise<any>;
}
