import type { Movie } from "@sebastiantegel/edutypes";
import type { CartItem } from "../models/CartItem";

export enum CartActionTypes {
  ADDED,
  INCREASED,
  DECREASED,
  REMOVED,
}

export type CartAction = {
  type: CartActionTypes;
  payload: string;
};

export const CartReducer = (cart: CartItem[], action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADDED: {
      const product: Movie = JSON.parse(action.payload);

      const foundInCart = cart.find(
        (ci) => ci.product.imdbID === product.imdbID,
      );

      if (foundInCart) {
        return cart.map((ci) => {
          if (ci.product.imdbID === product.imdbID)
            return { ...ci, amount: ci.amount + 1 };
          return ci;
        });
      } else {
        return [...cart, { product: product, amount: 1 }];
      }
    }

    case CartActionTypes.INCREASED: {
      return cart.map((ci) => {
        if (ci.product.imdbID === action.payload)
          return { ...ci, amount: ci.amount + 1 };
        return ci;
      });
    }

    case CartActionTypes.DECREASED: {
      const foundProduct = cart.find(
        (ci) => ci.product.imdbID === action.payload,
      );

      if (foundProduct.amount > 1) {
        return cart.map((ci) => {
          if (ci.product.imdbID === action.payload)
            return { ...ci, amount: ci.amount - 1 };
          return ci;
        });
      }

      return cart.filter((ci) => ci.product.imdbID !== action.payload);
    }

    case CartActionTypes.REMOVED: {
      return cart.filter((ci) => ci.product.imdbID !== action.payload);
    }
  }

  return cart;
};
