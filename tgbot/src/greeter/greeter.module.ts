import { Module } from '@nestjs/common';
import { GreeterUpdate } from './greeter.update';
import { RandomNumberScene } from './scenes/random-number.scene';
import { GreeterWizard } from './wizard/greeter.wizard';
import { PlanningScene } from './planning/planning.scene';
import { GreeterService } from './greeter.service';

@Module({
  providers: [GreeterUpdate, RandomNumberScene, GreeterWizard, PlanningScene, GreeterService],
})
export class GreeterModule {}
