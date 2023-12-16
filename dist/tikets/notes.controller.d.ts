import { NotesService } from './notes.service';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    findAll(): Promise<any[]>;
    findOne(id: any): Promise<any>;
    create(note: any): Promise<void>;
    editNote(note: any, id: number): Promise<any>;
    remove(id: any): void;
}
