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
exports.GreeterUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../app.constants");
const update_type_decorator_1 = require("../common/decorators/update-type.decorator");
const schedule_1 = require("@nestjs/schedule");
const telegraf_1 = require("telegraf");
let GreeterUpdate = class GreeterUpdate {
    constructor(bot) {
        this.bot = bot;
    }
    onStart() {
        return 'Say hello to me';
    }
    onGreetings(updateType, firstName) {
        return `Hey ${firstName}`;
    }
    async onSceneCommand(ctx) {
        await ctx.scene.enter(app_constants_1.HELLO_SCENE_ID);
    }
    async onWizardCommand(ctx) {
        await ctx.scene.enter(app_constants_1.WIZARD_SCENE_ID);
    }
    async onTasksCommand(ctx) {
        console.log(ctx.message.chat.id);
        await ctx.scene.enter(app_constants_1.PLANNING_SCENE_ID);
    }
    async reminder() {
        console.log(`Hey lets do planning`);
        await this.bot.telegram.sendMessage('583363752', 'do it');
    }
};
exports.GreeterUpdate = GreeterUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GreeterUpdate.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)(['hi', 'hello', 'hey', 'qq']),
    __param(0, (0, update_type_decorator_1.UpdateType)()),
    __param(1, (0, nestjs_telegraf_1.Sender)('first_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], GreeterUpdate.prototype, "onGreetings", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('scene'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreeterUpdate.prototype, "onSceneCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('wizard'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreeterUpdate.prototype, "onWizardCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('planning'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreeterUpdate.prototype, "onTasksCommand", null);
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GreeterUpdate.prototype, "reminder", null);
exports.GreeterUpdate = GreeterUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)(app_constants_1.GreeterBotName)),
    __metadata("design:paramtypes", [telegraf_1.Telegraf])
], GreeterUpdate);
//# sourceMappingURL=greeter.update.js.map