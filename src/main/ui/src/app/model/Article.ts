export interface Article {
  id: number;
  title: string;
  releaseDate: string;
  author: string;
  topic: Topic[];
  content: string;
}

interface Topic {
  label: string;
  value: string;
}
