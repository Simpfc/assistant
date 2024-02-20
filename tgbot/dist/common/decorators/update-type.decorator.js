"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateType = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
exports.UpdateType = (0, common_1.createParamDecorator)((_, ctx) => nestjs_telegraf_1.TelegrafExecutionContext.create(ctx).getContext().updateType);
//# sourceMappingURL=update-type.decorator.js.map