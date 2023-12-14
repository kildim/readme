import { Post } from '@project/shared/app/types';

export interface PostVideo extends Post {
  title: string;
  video: string;
}
