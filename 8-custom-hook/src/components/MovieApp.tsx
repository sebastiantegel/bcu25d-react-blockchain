import { useEffect, useState } from "react";
import type { Movie } from "../models/Movie";
import { getMovieById, getMovies } from "../services/movieService";

export const MovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]"),
  );
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    console.log("Effect is running");

    const getData = async () => {
      const movies = await getMovies("star");
      setMovies(movies);
    };

    if (movies.length === 0) {
      getData();
    }
  }, []);

  const handleSearch = async (search: string) => {
    const movies = await getMovies(search);
    setMovies(movies);
    localStorage.setItem("movies", JSON.stringify(movies));
    setSearchText("");
  };

  const handleSingleMovie = async (id: string) => {
    const movie = await getMovieById(id);
    console.log(movie);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(searchText);
        }}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Sök</button>
      </form>

      <div className="movies">
        {movies.map((m) => (
          <div
            key={m.imdbID}
            className="movie"
            onClick={() => handleSingleMovie(m.imdbID)}
          >
            <h3>{m.Title}</h3>
            <div>
              <img src={m.Poster} alt={m.Title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
