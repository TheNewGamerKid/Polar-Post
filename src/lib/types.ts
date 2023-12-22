
export interface Blog {
  time_posted: number;
  image_src: string;
  summary: string;
  author: string;
  title: string;
  id: string;
}

export interface FullBlog extends Blog {
  splashscreen: string;
  article: string;
}