import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/movies"}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="center">
          <Outlet />
        </section>

        <div className="ticks"></div>
      </main>
      <footer></footer>
    </>
  );
};
