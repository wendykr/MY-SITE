export interface BlogPostDataStructure {
  id: number;
  date: string;
  title: string;
  text: string;
  tags?: string[];
  link?: string;
}
