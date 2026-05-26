import { type Movie, type OmdbResponse } from "@sebastiantegel/edutypes";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star",
      );
      const data: OmdbResponse = await response.json();

      setMovies(data.Search);
    };

    getMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <Link to={`/movie/${movie.imdbID}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
};
