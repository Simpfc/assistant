import { Context } from '../../interfaces/context.interface';
export declare class RandomNumberScene {
    onSceneEnter(): string;
    onSceneLeave(): string;
    onRandomCommand(): number;
    onLeaveCommand(ctx: Context): Promise<void>;
}
