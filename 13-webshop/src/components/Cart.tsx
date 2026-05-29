import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { CartActionTypes } from "../reducers/CartReducer";

export const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <>
      {cart.map((ci) => (
        <div key={ci.product.imdbID}>
          <span>{ci.product.Title}</span>
          <span>
            <button
              onClick={() => {
                dispatch({
                  type: CartActionTypes.DECREASED,
                  payload: ci.product.imdbID,
                });
              }}
            >
              {ci.amount === 1 ? "Ta bort" : "-"}
            </button>
            {ci.amount}
            <button
              onClick={() => {
                dispatch({
                  type: CartActionTypes.INCREASED,
                  payload: ci.product.imdbID,
                });
              }}
            >
              +
            </button>
            {ci.amount > 1 && (
              <button
                onClick={() => {
                  dispatch({
                    type: CartActionTypes.REMOVED,
                    payload: ci.product.imdbID,
                  });
                }}
              >
                Ta bort
              </button>
            )}
          </span>
        </div>
      ))}
    </>
  );
};
