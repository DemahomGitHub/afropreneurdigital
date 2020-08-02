export interface Article {
  id: number;
  title: string;
  releaseDate: string;
  author: Author;
  topics: Topic[];
  content: string;
}

export interface Topic {
  id: number;
  group: string;
  key: string;
  value: string;
}

export interface Author {
  id: number;
  fullName: string;
}
