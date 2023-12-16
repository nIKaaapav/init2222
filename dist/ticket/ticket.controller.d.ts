import { TicketsService } from './ticket.service';
export declare class TicketsController {
    private ticketsService;
    constructor(ticketsService: TicketsService);
    findAll(dto: {
        take: number;
        skip: number;
        userId: string;
    }): any;
    find(note: any, data: any): any;
}
