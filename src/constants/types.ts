export type PostType = {
  id: string;
  title: string;
  category: string;
  publicationDate: string;
  author: string;
};

export type PostsListType = Array<PostType>;
