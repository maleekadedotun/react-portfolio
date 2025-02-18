export interface Post {
  _id: string;
  author: string;
  category: string;
  title: string;
  body: string;
  image: string;
  otherImages: string[];
  postId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostData {
  message: string;
  post: Post[];
}
