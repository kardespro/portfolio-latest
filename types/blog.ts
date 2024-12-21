export interface BlogPost {
  uuid: string;
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
} 