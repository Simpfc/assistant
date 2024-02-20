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
exports.RandomNumberScene = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_constants_1 = require("../../app.constants");
let RandomNumberScene = class RandomNumberScene {
    onSceneEnter() {
        console.log('Enter to scene');
        return 'Welcome on scene ✋';
    }
    onSceneLeave() {
        console.log('Leave from scene');
        return 'Bye Bye 👋';
    }
    onRandomCommand() {
        console.log('Use "random" command');
        return Math.floor(Math.random() * 11);
    }
    async onLeaveCommand(ctx) {
        await ctx.scene.leave();
    }
};
exports.RandomNumberScene = RandomNumberScene;
__decorate([
    (0, nestjs_telegraf_1.SceneEnter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RandomNumberScene.prototype, "onSceneEnter", null);
__decorate([
    (0, nestjs_telegraf_1.SceneLeave)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RandomNumberScene.prototype, "onSceneLeave", null);
__decorate([
    (0, nestjs_telegraf_1.Command)(['rng', 'random']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], RandomNumberScene.prototype, "onRandomCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RandomNumberScene.prototype, "onLeaveCommand", null);
exports.RandomNumberScene = RandomNumberScene = __decorate([
    (0, nestjs_telegraf_1.Scene)(app_constants_1.HELLO_SCENE_ID)
], RandomNumberScene);
//# sourceMappingURL=random-number.scene.js.map