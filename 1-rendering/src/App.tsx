import "./App.css";
import { ConditionalAnd } from "./components/ConditionalAnd";
import { ConditionalBasic } from "./components/ConditionalBasic";
import { ConditionalTernary } from "./components/ConditionalTernary";
import { Interpolation } from "./components/Interpolation";
import { ListNumbers } from "./components/ListNumbers";
import { ListObjects } from "./components/ListObjects";

function App() {
  return (
    <>
      <section>Hej</section>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        magnam odio necessitatibus consectetur laudantium repellat delectus
        dicta provident ducimus! Laudantium corrupti nulla ratione vel rem!
        Laboriosam nam doloribus ab fugiat.
      </div>

      <Interpolation></Interpolation>
      <ConditionalBasic></ConditionalBasic>
      <ConditionalTernary></ConditionalTernary>
      <ConditionalAnd></ConditionalAnd>
      <ListNumbers></ListNumbers>
      <ListObjects></ListObjects>
    </>
  );
}

export default App;
