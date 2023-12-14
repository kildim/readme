import { Post } from '@project/shared/app/types';

export interface PostText extends Post {
  title: string;
  announcement: string;
  text: string;
}
