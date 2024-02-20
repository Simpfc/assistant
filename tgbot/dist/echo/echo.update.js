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
exports.EchoUpdate = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const echo_service_1 = require("./echo.service");
const app_constants_1 = require("../app.constants");
const reverse_text_pipe_1 = require("../common/pipes/reverse-text.pipe");
const response_time_interceptor_1 = require("../common/interceptors/response-time.interceptor");
const admin_guard_1 = require("../common/guards/admin.guard");
const telegraf_exception_filter_1 = require("../common/filters/telegraf-exception.filter");
let EchoUpdate = class EchoUpdate {
    constructor(bot, echoService) {
        this.bot = bot;
        this.echoService = echoService;
    }
    async onStart() {
        const me = await this.bot.telegram.getMe();
        return `Hey, I'm ${me.first_name}`;
    }
    async onHelp() {
        return 'Send me any text';
    }
    onAdminCommand() {
        return 'Welcome judge';
    }
    onMessage(reversedText) {
        return this.echoService.echo(reversedText);
    }
};
exports.EchoUpdate = EchoUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EchoUpdate.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.Help)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EchoUpdate.prototype, "onHelp", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('admin'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], EchoUpdate.prototype, "onAdminCommand", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Message)('text', new reverse_text_pipe_1.ReverseTextPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], EchoUpdate.prototype, "onMessage", null);
exports.EchoUpdate = EchoUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    (0, common_1.UseInterceptors)(response_time_interceptor_1.ResponseTimeInterceptor),
    (0, common_1.UseFilters)(telegraf_exception_filter_1.TelegrafExceptionFilter),
    __param(0, (0, nestjs_telegraf_1.InjectBot)(app_constants_1.GreeterBotName)),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        echo_service_1.EchoService])
], EchoUpdate);
//# sourceMappingURL=echo.update.js.map