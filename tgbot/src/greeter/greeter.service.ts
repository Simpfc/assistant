import { Injectable } from '@nestjs/common';

@Injectable()
export class GreeterService {
  echo(text: string): string {
    return `Echo: ${text}`;
  }
}
