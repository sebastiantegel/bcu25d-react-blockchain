import type { Movie, OmdbResponse } from "@sebastiantegel/edutypes";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const LandingPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star",
      );
      const data: OmdbResponse = await response.json();

      setMovies(data.Search);
    };

    if (movies.length > 0) return;

    getProducts();
  });

  return (
    <section className="movies">
      {movies.map((m) => (
        <div key={m.imdbID} className="movie">
          <h4>{m.Title}</h4>
          <div className="image-container">
            <img src={m.Poster} alt={m.Title} />
          </div>
          <Link to={`/product/${m.imdbID}`}>Läs mer...</Link>
        </div>
      ))}
    </section>
  );
};
