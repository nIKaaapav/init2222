import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { TicketsService } from './ticket.service';
import { AzureADGuard } from 'src/azure-ad.strategy';

@Controller('ticket')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Get()
  // @UseGuards(AzureADGuard)
  findAll(@Param() dto: {take: number, skip: number, userId: string}): any {
    console.log({dto});
    
    return this.ticketsService.getTickets(dto.userId, dto.take, dto.skip);
  }


  @Post('/success')
  // @UseGuards(AzureADGuard)
  find(@Body() note: any, @Param() data): any {
    console.log({note, data});
    
    // return this.÷.getTickets(dto.userId, dto.take, dto.skip);
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id) {
  //   return this.notesService.findOne(id);
  // }

  // @Post() create(@Body() note: any) {
  //   return this.notesService.createNote(note);
  // }

  // @Patch(':id')
  // async editNote(@Body() note: any, @Param('id') id: number): Promise<any> {
  //   const noteEdited = await this.notesService.editNote(id, note);
  //   return noteEdited;
  // }

  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id) {
  //   this.notesService.remove(id);
  // }
}
