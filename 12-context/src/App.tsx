import "./App.css";
import { Parent } from "./components/Parent";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <>
      <section id="center">
        <Parent />
        <TodoApp />
      </section>
    </>
  );
}

export default App;
