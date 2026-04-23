import "./App.css";
import { Parent } from "./components/Parent";
import { PersonApp } from "./components/PersonApp";

function App() {
  return (
    <>
      <section id="center">
        {/* <Parent /> */}
        <PersonApp />
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
