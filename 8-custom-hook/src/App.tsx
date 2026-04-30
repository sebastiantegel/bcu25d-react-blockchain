import "./App.css";
import { MovieApp } from "./components/MovieApp";

function App() {
  // https://omdbapi.com/?apikey=416ed51a&s=star

  return (
    <>
      <section id="center">
        <MovieApp />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
