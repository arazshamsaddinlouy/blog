export type Article = {
  title: string;
  description: string;
  path: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
  image?: string;
  icon?: string;
  gradient?: string;
};
