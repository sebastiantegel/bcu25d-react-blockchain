import { useState } from "react";
import "./App.css";
import { CircleSelect } from "./models/CircleSelect";
import { Circles } from "./components/Circles";

function App() {
  const name = "Sebastian";
  const shouldBeVisible = true;
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
  const [circles, setCircles] = useState<CircleSelect[]>([
    new CircleSelect("1"),
    new CircleSelect("10"),
    new CircleSelect("100"),
  ]);

  const handleSelected = (n: string) => {
    setCircles(
      circles.map((c) => {
        if (c.text === n) {
          return { ...c, selected: !c.selected };
        }
        return c;
      }),
    );
  };

  return (
    <>
      <section id="center">
        <div>{name}</div>
        <div>{shouldBeVisible ? <>Alternativ 1</> : <>Alternativ 2</>}</div>
        <div>{shouldBeVisible && <div>Alternativ 3</div>}</div>
        <ul>
          {numbers.map((n, i) => (
            <li key={i} className={n % 2 === 0 ? "even" : "odd"}>
              {n}
            </li>
          ))}
        </ul>

        <Circles circles={circles} handleSelected={handleSelected} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
