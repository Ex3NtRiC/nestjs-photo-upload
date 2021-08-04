import { Injectable } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
