import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CommentModule } from './comment/comment.module';
import { TextModule } from './text/text.module';

@Module({
  imports: [CommentModule, TextModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
