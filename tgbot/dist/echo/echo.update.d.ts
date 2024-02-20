import { Telegraf } from 'telegraf';
import { EchoService } from './echo.service';
import { Context } from '../interfaces/context.interface';
export declare class EchoUpdate {
    private readonly bot;
    private readonly echoService;
    constructor(bot: Telegraf<Context>, echoService: EchoService);
    onStart(): Promise<string>;
    onHelp(): Promise<string>;
    onAdminCommand(): string;
    onMessage(reversedText: string): string;
}
