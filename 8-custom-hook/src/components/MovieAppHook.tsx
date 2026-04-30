import { useFetch } from "../hooks/useFetch";
import type { OmdbResponse } from "../models/OmdbResponse";

export const MovieAppHook = () => {
  const [loading, data] = useFetch<OmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star",
  );

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      {data?.Search.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <h3>{movie.Title}</h3>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}
    </>
  );
};
