import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, getManager } from 'typeorm';
import { Ticket } from './ticket.entity';
import { log } from 'console';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private ticket: Repository<Ticket>,
    private entityManager: EntityManager
  ) {
    this.entityManager = getManager();
  }

  async getTickets(userId: string, take: number, skip: number): Promise<any[]> { 
    const tickets = await this.entityManager.query(`
      SELECT 
      "Ticket"."StateId" AS "state", 
      "TicketPrices"."Loan" AS "loan", 
      "TicketPrices"."Estimate" AS "estimate",
      "TicketPrices"."TicketId" AS "id" 
        FROM "MtWinTicket"."dbo"."TicketV2" "Ticket" 
        LEFT JOIN "MtWinTicket"."dbo"."TicketPrices" "TicketPrices" 
        ON TicketPrices.TicketId = Ticket.Id 
        WHERE Ticket.CustomerId = '${'4A8B6CF5-0CB2-4028-B6D2-657B3DF9E2B7'}'
        ORDER BY (SELECT NULL) OFFSET ${0} ROWS FETCH NEXT ${10} ROWS ONLY;
    `);
      // 879e56da-c795-43ab-9736-c9ed341e7116
     return tickets;
  }
}
