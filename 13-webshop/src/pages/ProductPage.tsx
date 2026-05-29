import type { Movie } from "@sebastiantegel/edutypes";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../contexts/CartContext";
import { CartActionTypes } from "../reducers/CartReducer";

export const ProductPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&i=" + id,
      );
      const data: Movie = await response.json();
      setMovie(data);
    };

    if (movie) return;

    getProduct();
  });

  return (
    <section>
      <h3>{movie?.Title}</h3>
      <div>
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <button
        onClick={() => {
          dispatch({
            type: CartActionTypes.ADDED,
            payload: JSON.stringify(movie),
          });
        }}
      >
        Lägg i varukorg
      </button>
    </section>
  );
};
