"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Bootstrap');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.enableCors();
    await app.listen(3001, '0.0.0.0');
    logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map