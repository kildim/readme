import { Controller, Get } from '@nestjs/common';
import { PostService } from '../post.service';
import { TextService } from './text.service';

@Controller('text')
export class TextController {
  constructor(private readonly textPostService: TextService) {}

  @Get('/test')
  getData() {
    return this.textPostService.getData();
  }
}
