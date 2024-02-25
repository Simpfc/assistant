import {Command, Ctx, Hears, Start, Update, Sender, InjectBot, Message} from 'nestjs-telegraf';
import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { Context } from '../interfaces/context.interface';
import {HELLO_SCENE_ID, WIZARD_SCENE_ID, PLANNING_SCENE_ID, GreeterBotName} from '../app.constants';
import { UpdateType } from '../common/decorators/update-type.decorator';
import { Cron } from "@nestjs/schedule";
import {Telegraf} from "telegraf";

@Update()
export class GreeterUpdate {
  constructor(
      @InjectBot(GreeterBotName)
      private readonly bot: Telegraf<Context>
  ) {

  }
  @Start()
  onStart(): string {
    return 'Say hello to me';
  }

  @Hears(['hi', 'hello', 'hey', 'qq'])
  onGreetings(
    @UpdateType() updateType: TelegrafUpdateType,
    @Sender('first_name') firstName: string,
  ): string {
    return `Hey ${firstName}`;
  }

  @Command('scene')
  async onSceneCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(HELLO_SCENE_ID);
  }

  @Command('wizard')
  async onWizardCommand(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(WIZARD_SCENE_ID);
  }


  @Command('planning')
  async onTasksCommand(@Ctx() ctx: Context): Promise<void> {
    console.log(ctx.message.chat.id);
    await ctx.scene.enter(PLANNING_SCENE_ID);
  }
  @Cron('20 01 9 * * *')
  async reminder(
  ) {
    console.log(`Hey lets do planning`);
    await this.bot.telegram.sendMessage('583363752', 'do it')
    // return `Hey lets do planning`;
  }

  @Cron('20 20 23 * * *')
  async reminderTest(
  ) {
    console.log(`Hey lets do evening planning`);
    await this.bot.telegram.sendMessage('583363752', 'do it')
    // return `Hey lets do planning`;
  }
}
