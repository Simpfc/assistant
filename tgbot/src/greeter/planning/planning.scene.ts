import { Scene, SceneEnter, SceneLeave, Command } from 'nestjs-telegraf';
import { PLANNING_SCENE_ID } from '../../app.constants';
import { Context } from '../../interfaces/context.interface';

@Scene(PLANNING_SCENE_ID)
export class PlanningScene {
  @SceneEnter()
  onSceneEnter(): string {
    return 'Lets do planning ✋';
  }

  @SceneLeave()
  onSceneLeave(): string {
    return 'Ok lets do it 💪';
  }

  // @Command(['rng', 'random'])
  // onRandomCommand(): number {
  //   return Math.floor(Math.random() * 11);
  // }

  @Command('end')
  async onLeaveCommand(ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
  @Command('list')
  async onListCommand(ctx: Context) {
    return '## Stay in touch\n' +
        '\n' +
        '- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)\n' +
        '- Website - [https://nestjs.com](https://nestjs.com/)\n' +
        '- Twitter - [@nestframework](https://twitter.com/nestframework)\n'
  }

  @Command('help')
  async onHelpCommand(ctx: Context) {
    return '/add /edit'
  }
}
