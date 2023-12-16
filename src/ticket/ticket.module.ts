import { Module } from '@nestjs/common';
import { TicketsService } from './ticket.service';
import { TicketsController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { TicketPrices } from './ticket-prices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, TicketPrices])],
  providers: [TicketsService],
  controllers: [TicketsController],
})
export class TicketsModule {}
