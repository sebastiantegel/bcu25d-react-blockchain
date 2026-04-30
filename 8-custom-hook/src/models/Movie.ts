export type Movie = {
  Title: string;
  imdbID: string;
  Poster: string;
};

export type MovieExt = Movie & {
  Plot: string;
  Actors: string;
  Runtime: string;
};
