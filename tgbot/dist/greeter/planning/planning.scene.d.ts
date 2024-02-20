import { Context } from '../../interfaces/context.interface';
export declare class PlanningScene {
    onSceneEnter(): string;
    onSceneLeave(): string;
    onLeaveCommand(ctx: Context): Promise<void>;
    onListCommand(ctx: Context): Promise<string>;
    onHelpCommand(ctx: Context): Promise<string>;
}
