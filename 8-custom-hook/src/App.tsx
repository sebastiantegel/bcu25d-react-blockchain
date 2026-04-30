import "./App.css";
import { MovieApp } from "./components/MovieApp";
import { MovieAppHook } from "./components/MovieAppHook";

function App() {
  // https://omdbapi.com/?apikey=416ed51a&s=star

  return (
    <>
      <section id="center">
        {/* <MovieApp /> */}
        <MovieAppHook />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
