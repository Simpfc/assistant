import { PipeTransform } from '@nestjs/common';
export declare class ReverseTextPipe implements PipeTransform {
    transform(value: string): string;
}
