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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const echo_module_1 = require("./echo/echo.module");
const greeter_module_1 = require("./greeter/greeter.module");
const session_middleware_1 = require("./middleware/session.middleware");
const app_constants_1 = require("./app.constants");
const schedule_1 = require("@nestjs/schedule");
let AppModule = class AppModule {
    constructor() { }
    onModuleInit() {
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            nestjs_telegraf_1.TelegrafModule.forRootAsync({
                botName: app_constants_1.GreeterBotName,
                useFactory: () => ({
                    token: '6731438138:AAEBmcAknLUA9p9d5Ak6oXQVrvUKJrJ-Rgg',
                    middlewares: [session_middleware_1.sessionMiddleware],
                    include: [greeter_module_1.GreeterModule],
                }),
            }),
            echo_module_1.EchoModule,
            greeter_module_1.GreeterModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map