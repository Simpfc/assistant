import { UpdateType as TelegrafUpdateType } from 'telegraf/typings/telegram-types';
import { Context } from '../interfaces/context.interface';
import { Telegraf } from "telegraf";
export declare class GreeterUpdate {
    private readonly bot;
    constructor(bot: Telegraf<Context>);
    onStart(): string;
    onGreetings(updateType: TelegrafUpdateType, firstName: string): string;
    onSceneCommand(ctx: Context): Promise<void>;
    onWizardCommand(ctx: Context): Promise<void>;
    onTasksCommand(ctx: Context): Promise<void>;
    reminder(): Promise<undefined>;
}
