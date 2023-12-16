"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("@nestjs/typeorm/dist/typeorm.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ticket_module_1 = require("./ticket/ticket.module");
const azure_ad_strategy_1 = require("./azure-ad.strategy");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_module_1.TypeOrmModule.forRoot({
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
            ticket_module_1.TicketsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, azure_ad_strategy_1.AzureADStrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map