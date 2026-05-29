import { Outlet } from "react-router";
import { Cart } from "../components/Cart";
import { useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";

export const Layout = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <section id="main">
        <header>
          <Cart />
        </header>
        <main>
          <section id="center">
            <Outlet />
          </section>
        </main>
        <footer></footer>
      </section>
    </CartContext.Provider>
  );
};
