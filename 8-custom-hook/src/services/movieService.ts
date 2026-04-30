// Hantera allting som har med filmer att göra.
// All kommunikation med omvärden gällande filmer
// skall gå via den här filen

import type { MovieExt } from "../models/Movie";
import type { OmdbResponse } from "../models/OmdbResponse";
import { get } from "./serviceBase";

// CRUD - vi kan bara använda R

export const getMovies = async (searchText: string) => {
  const data = await get<OmdbResponse>(
    `https://omdbapi.com/?apikey=416ed51a&s=${searchText}`,
  );
  return data.Search;
};

export const getMovieById = async (id: string) => {
  return await get<MovieExt>(`https://omdbapi.com/?apikey=416ed51a&i=${id}`);
};
