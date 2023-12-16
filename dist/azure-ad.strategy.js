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
exports.AzureADGuard = exports.AzureADStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_azure_ad_1 = require("passport-azure-ad");
const clientID = '9ea562be-e41b-4766-87c3-a4e6d2be2a95';
const tenantID = '9a4813dd-fc07-4da9-a318-13010878873d';
let AzureADStrategy = class AzureADStrategy extends passport_1.PassportStrategy(passport_azure_ad_1.BearerStrategy, 'azure-ad') {
    constructor() {
        super({
            identityMetadata: `https://login.microsoftonline.com/${tenantID}/v2.0/.well-known/openid-configuration`,
            clientID,
        });
    }
    async validate(data) {
        console.log({ eee: 'eee' });
        return data;
    }
};
AzureADStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AzureADStrategy);
exports.AzureADStrategy = AzureADStrategy;
exports.AzureADGuard = passport_1.AuthGuard('azure-ad');
//# sourceMappingURL=azure-ad.strategy.js.map