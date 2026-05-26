import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { BigMovie } from "../models/BigMovie";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<BigMovie>();

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&i=" + id,
      );
      const data: BigMovie = await response.json();
      setMovie(data);
    };

    getMovie();
  }, [id]);

  return (
    <section>
      <h3>{movie?.Title}</h3>
      <div>
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <p>Actors: {movie?.Actors}</p>
      <p>Plot: {movie?.Plot}</p>
      <ul>
        {movie?.Ratings.map((rating) => (
          <li key={rating.Source}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
    </section>
  );
};
