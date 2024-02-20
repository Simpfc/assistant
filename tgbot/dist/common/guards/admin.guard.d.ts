import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AdminGuard implements CanActivate {
    private readonly ADMIN_IDS;
    canActivate(context: ExecutionContext): boolean;
}
