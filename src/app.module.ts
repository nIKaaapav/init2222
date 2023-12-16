import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './ticket/ticket.module';
import { AzureADStrategy } from './azure-ad.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mssql",
      "host": "appsrv-dev.mtwin.ru",
      "port": 10433,
      "username": "mtwinadmin",
      "password": "_MtWin!Sql",
      "database": "MtWinTicket",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": false,
      "options": { "encrypt": false },
      "logging": true
  }),
    TicketsModule
  ],
  controllers: [AppController],
  providers: [AppService, AzureADStrategy],
})
export class AppModule {}
