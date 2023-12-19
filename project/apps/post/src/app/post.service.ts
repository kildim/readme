import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getData(): { message: string } {
    return { message: 'Hello Post API' };
  }
}
