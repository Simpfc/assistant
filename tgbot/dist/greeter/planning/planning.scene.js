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
exports.PlanningScene = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../../app.constants");
let PlanningScene = class PlanningScene {
    onSceneEnter() {
        return 'Lets do planning ✋';
    }
    onSceneLeave() {
        return 'Ok lets do it 💪';
    }
    async onLeaveCommand(ctx) {
        await ctx.scene.leave();
    }
    async onListCommand(ctx) {
        return '## Stay in touch\n' +
            '\n' +
            '- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)\n' +
            '- Website - [https://nestjs.com](https://nestjs.com/)\n' +
            '- Twitter - [@nestframework](https://twitter.com/nestframework)\n';
    }
    async onHelpCommand(ctx) {
        return '/add /edit';
    }
};
exports.PlanningScene = PlanningScene;
__decorate([
    (0, nestjs_telegraf_1.SceneEnter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PlanningScene.prototype, "onSceneEnter", null);
__decorate([
    (0, nestjs_telegraf_1.SceneLeave)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PlanningScene.prototype, "onSceneLeave", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('end'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanningScene.prototype, "onLeaveCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanningScene.prototype, "onListCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('help'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlanningScene.prototype, "onHelpCommand", null);
exports.PlanningScene = PlanningScene = __decorate([
    (0, nestjs_telegraf_1.Scene)(app_constants_1.PLANNING_SCENE_ID)
], PlanningScene);
//# sourceMappingURL=planning.scene.js.map