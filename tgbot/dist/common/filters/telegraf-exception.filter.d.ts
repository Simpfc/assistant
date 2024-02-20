import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class TelegrafExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): Promise<void>;
}
