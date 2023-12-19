import { Injectable } from '@nestjs/common';

@Injectable()
export class TextService {
  getData(): { message: string } {
    return { message: 'Hello TextPost API' };
  }
}
