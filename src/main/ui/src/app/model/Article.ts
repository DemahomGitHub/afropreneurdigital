export interface Article {
  id: number;
  title: string;
  releaseDate: string;
  author: string;
  topics: Topic[];
  content: string;
}

export interface Topic {
  label: string;
  value: string;
}
