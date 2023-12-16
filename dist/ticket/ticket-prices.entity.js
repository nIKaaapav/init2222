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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketPrices = void 0;
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let TicketPrices = class TicketPrices {
};
__decorate([
    typeorm_1.PrimaryColumn({ name: 'TicketId', type: 'uuid', nullable: false }),
    typeorm_1.OneToMany(() => ticket_entity_1.Ticket, (ticket) => ticket.id),
    __metadata("design:type", ticket_entity_1.Ticket)
], TicketPrices.prototype, "ticket_id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Loan', type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], TicketPrices.prototype, "Loan", void 0);
__decorate([
    typeorm_1.Column({ name: 'Estimate', type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], TicketPrices.prototype, "Estimate", void 0);
TicketPrices = __decorate([
    typeorm_1.Entity('TicketPrices', { database: "MtWinTicket", schema: "dbo" })
], TicketPrices);
exports.TicketPrices = TicketPrices;
//# sourceMappingURL=ticket-prices.entity.js.map