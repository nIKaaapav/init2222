import { EntityManager, Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
export declare class TicketsService {
    private ticket;
    private entityManager;
    constructor(ticket: Repository<Ticket>, entityManager: EntityManager);
    getTickets(userId: string, take: number, skip: number): Promise<any[]>;
}
