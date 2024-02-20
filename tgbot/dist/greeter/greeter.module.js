"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterModule = void 0;
const common_1 = require("@nestjs/common");
const greeter_update_1 = require("./greeter.update");
const random_number_scene_1 = require("./scenes/random-number.scene");
const greeter_wizard_1 = require("./wizard/greeter.wizard");
const planning_scene_1 = require("./planning/planning.scene");
const greeter_service_1 = require("./greeter.service");
let GreeterModule = class GreeterModule {
};
exports.GreeterModule = GreeterModule;
exports.GreeterModule = GreeterModule = __decorate([
    (0, common_1.Module)({
        providers: [greeter_update_1.GreeterUpdate, random_number_scene_1.RandomNumberScene, greeter_wizard_1.GreeterWizard, planning_scene_1.PlanningScene, greeter_service_1.GreeterService],
    })
], GreeterModule);
//# sourceMappingURL=greeter.module.js.map