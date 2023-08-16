export interface LibraryStructure {
  library: Library[];
}

export interface Library {
  book: BookStructure;
}

export interface BookStructure {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}
