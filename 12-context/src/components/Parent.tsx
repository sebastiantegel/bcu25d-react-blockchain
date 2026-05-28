import { useState } from "react";
import { SimpleContext } from "../contexts/SimpleContext";
import { Child } from "./Child";

export const Parent = () => {
  const [someText, setSomeText] = useState("Hello world!");

  return (
    <>
      <SimpleContext.Provider value={someText}>
        <div>Parent</div>
        <button
          onClick={() => {
            setSomeText("Hejsan");
          }}
        >
          Change value
        </button>
        <div>
          <Child />
        </div>
      </SimpleContext.Provider>{" "}
    </>
  );
};
