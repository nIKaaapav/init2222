"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const ticket_controller_1 = require("./ticket.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_entity_1 = require("./ticket.entity");
const ticket_prices_entity_1 = require("./ticket-prices.entity");
let TicketsModule = class TicketsModule {
};
TicketsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_entity_1.Ticket, ticket_prices_entity_1.TicketPrices])],
        providers: [ticket_service_1.TicketsService],
        controllers: [ticket_controller_1.TicketsController],
    })
], TicketsModule);
exports.TicketsModule = TicketsModule;
//# sourceMappingURL=ticket.module.js.map