export interface AuthorDetails {
  karma: number;
  created: number;
}

export interface Story {
  id: number;
  title: string;
  score: number;
  url: string;
  by: string;
}

export interface AuthorProps {
  authorName: string;
}

export interface StoryProps {
  story: Story;
}

export interface AuthorContextType {
  authors: Record<string, AuthorDetails>;
  fetchAuthor: (authorName: string) => Promise<void>;
}
