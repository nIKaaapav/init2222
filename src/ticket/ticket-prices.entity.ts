import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./ticket.entity";

@Entity('TicketPrices', { database: "MtWinTicket", schema: "dbo" })
export class TicketPrices {
    @PrimaryColumn({ name: 'TicketId', type: 'uuid',  nullable: false })
    @OneToMany(() => Ticket, (ticket) => ticket.id)
  ticket_id: Ticket;

  @Column({ name: 'Loan', type: 'decimal', nullable: false })
  Loan: number;

  @Column({ name: 'Estimate', type: 'decimal', nullable: false })
  Estimate: number;
}
