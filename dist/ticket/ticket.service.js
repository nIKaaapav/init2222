"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let TicketsService = class TicketsService {
    constructor(ticket, entityManager) {
        this.ticket = ticket;
        this.entityManager = entityManager;
        this.entityManager = typeorm_2.getManager();
    }
    async getTickets(userId, take, skip) {
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
        return tickets;
    }
};
TicketsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=ticket.service.js.map