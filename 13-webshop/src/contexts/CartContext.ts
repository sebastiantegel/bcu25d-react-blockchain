import { createContext, type Dispatch } from "react";
import type { CartItem } from "../models/CartItem";
import type { CartAction } from "../reducers/CartReducer";

export type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  dispatch: () => {},
});
