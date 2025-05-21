import { AuthorContextType, AuthorDetails } from "@/utils/types";
import { createContext, useContext, useState } from "react";

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export const AuthorProvider = ({ children }: { children: React.ReactNode }) => {
  const [authors, setAuthors] = useState<Record<string, AuthorDetails>>({});

  const fetchAuthor = async (authorName: string) => {
    if (authors[authorName]) return;

    try {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${authorName}.json?print=pretty`
      );
      const data = await res.json();
      setAuthors((prev) => ({ ...prev, [authorName]: data }));
    } catch (err) {
      console.error("Error fetching author:", err);
    }
  };

  return (
    <AuthorContext.Provider value={{ authors, fetchAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => {
  const context = useContext(AuthorContext);
  if (!context)
    throw new Error("useAuthorContext must be used within AuthorProvider");
  return context;
};
