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
exports.GreeterWizard = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../../app.constants");
let GreeterWizard = class GreeterWizard {
    async onSceneEnter(ctx) {
        console.log('Enter to scene');
        await ctx.wizard.next();
        return 'Welcome to wizard scene ✋ Send me your name';
    }
    async onName(ctx, msg) {
        console.log('Enter to step 1');
        ctx.wizard.state['name'] = msg.text;
        await ctx.wizard.next();
        return 'Send me where are you from';
    }
    async onLocation(ctx, msg) {
        console.log('Enter to step 3');
        await ctx.scene.leave();
        return `Hello ${ctx.wizard.state.name} from ${msg.text}. I'm Greater bot from 127.0.0.1 👋`;
    }
};
exports.GreeterWizard = GreeterWizard;
__decorate([
    (0, nestjs_telegraf_1.WizardStep)(1),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreeterWizard.prototype, "onSceneEnter", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    (0, nestjs_telegraf_1.WizardStep)(2),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __param(1, (0, nestjs_telegraf_1.Message)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GreeterWizard.prototype, "onName", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    (0, nestjs_telegraf_1.WizardStep)(3),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __param(1, (0, nestjs_telegraf_1.Message)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GreeterWizard.prototype, "onLocation", null);
exports.GreeterWizard = GreeterWizard = __decorate([
    (0, nestjs_telegraf_1.Wizard)(app_constants_1.WIZARD_SCENE_ID)
], GreeterWizard);
//# sourceMappingURL=greeter.wizard.js.map