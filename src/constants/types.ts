export interface PostType {
  id: string;
  title: string;
  image: string;
  description: string;
  author: string;
  published_at: string;
}

export type PostsListType = Array<PostType>;
