import { Child } from "./Child";

export const Parent = () => {
  const someFunction = () => {
    console.log("Kört från parent");
  };

  return (
    <>
      <h2>Parent</h2>
      <Child otherFunction={someFunction} />
    </>
  );
};
