import { useEffect, useState } from "react";
import type { OmdbResponse } from "../models/OmdbResponse";
import type { Movie } from "../models/Movie";

export const MovieApp = () => {
  const [movies, setMovies] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]"),
  );
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    console.log("Effect is running");

    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star",
      );

      const data: OmdbResponse = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    };

    if (movies.length === 0) {
      getData();
    }
  }, []);

  const handleSearch = async (search: string) => {
    const response = await fetch(
      `https://omdbapi.com/?apikey=416ed51a&s=${search}`,
    );

    const data: OmdbResponse = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    localStorage.setItem("movies", JSON.stringify(data.Search));
    setSearchText("");
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
          <div key={m.imdbID} className="movie">
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
