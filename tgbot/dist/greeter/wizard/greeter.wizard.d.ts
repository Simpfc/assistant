import { WizardContext } from 'telegraf/typings/scenes';
export declare class GreeterWizard {
    onSceneEnter(ctx: WizardContext): Promise<string>;
    onName(ctx: WizardContext, msg: {
        text: string;
    }): Promise<string>;
    onLocation(ctx: WizardContext & {
        wizard: {
            state: {
                name: string;
            };
        };
    }, msg: {
        text: string;
    }): Promise<string>;
}
