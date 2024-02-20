"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegrafExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
let TelegrafExceptionFilter = class TelegrafExceptionFilter {
    async catch(exception, host) {
        const telegrafHost = nestjs_telegraf_1.TelegrafArgumentsHost.create(host);
        const ctx = telegrafHost.getContext();
        await ctx.replyWithHTML(`<b>Error</b>: ${exception.message}`);
    }
};
exports.TelegrafExceptionFilter = TelegrafExceptionFilter;
exports.TelegrafExceptionFilter = TelegrafExceptionFilter = __decorate([
    (0, common_1.Catch)()
], TelegrafExceptionFilter);
//# sourceMappingURL=telegraf-exception.filter.js.map