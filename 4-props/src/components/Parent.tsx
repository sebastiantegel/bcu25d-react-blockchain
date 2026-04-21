import { Child } from "./Child";

export const Parent = () => {
  return (
    <>
      <div>Parent</div>

      {/* Detta är ett anrop till funktionen Child: Child() */}
      {/* Anropet med name="Sebastian" blir Child({name:"Sebastian"}) */}
      <Child name="Sebastian" age={46} />

      <Child name="Hanna" age={45} />
      <Child name="Alvar" age={15} />
      <Child name="Astrid" age={15} />
    </>
  );
};
