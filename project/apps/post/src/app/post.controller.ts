import { Controller, Get } from '@nestjs/common';

import { PostService } from './post.service';
import { TextService } from './text/text.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService, private readonly textService: TextService) {}

  @Get('/post')
  getData() {
    return this.postService.getData();
  }

  @Get('/post/text')
  getTextData() {
    return this.textService.getData();
  }
}
