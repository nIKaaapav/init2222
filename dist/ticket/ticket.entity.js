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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
};
__decorate([
    typeorm_1.PrimaryColumn({
        type: 'uuid',
        name: 'Id',
        nullable: false,
        comment: 'This column represents the id of the entity. It composes the primary key of the table',
    }),
    __metadata("design:type", String)
], Ticket.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Number', type: 'nvarchar', length: 128, nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "number", void 0);
__decorate([
    typeorm_1.Column({ name: 'CustomerId', type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Ticket.prototype, "customer_id", void 0);
__decorate([
    typeorm_1.Column({ name: 'DateOfIssue', type: 'datetime', nullable: false }),
    __metadata("design:type", Date)
], Ticket.prototype, "date_of_issue", void 0);
__decorate([
    typeorm_1.Column({ name: 'TicketName', type: 'nvarchar', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "ticket_name", void 0);
__decorate([
    typeorm_1.Column({ name: 'TermInDays', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "term_in_days", void 0);
__decorate([
    typeorm_1.Column({ name: 'OfficeId', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "office_id", void 0);
__decorate([
    typeorm_1.Column({ name: 'StateId', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "state_id", void 0);
__decorate([
    typeorm_1.Column({ name: 'TicketTypeId', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticket_type_id", void 0);
__decorate([
    typeorm_1.Column({ name: 'InterestRate', type: 'decimal', nullable: true }),
    __metadata("design:type", Object)
], Ticket.prototype, "interest_rate", void 0);
__decorate([
    typeorm_1.Column({ name: 'ContractKind', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "contract_kind", void 0);
__decorate([
    typeorm_1.Column({ name: 'PeriodSpan', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "period_span", void 0);
Ticket = __decorate([
    typeorm_1.Entity('TicketV2', { database: "MtWinTicket", schema: "dbo" })
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.entity.js.map