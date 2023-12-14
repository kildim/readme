import { PostTypeEnum } from './post-type.enum';
import { PostStateEnum } from './post-state.enum';
import { Tag } from '@project/shared/helpers';

export interface Post {
  id: string;
  type: PostTypeEnum;
  createdAt: string;
  publishedAt: string;
  state: PostStateEnum;
  tag: Tag;
  publisherId: string;
  authorId: string;
  originalPostId: string;
  isReposted: () => boolean;
}
