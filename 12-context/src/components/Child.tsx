import { useContext } from "react";
import { SimpleContext } from "../contexts/SimpleContext";
import { GrandChild } from "./GrandChild";

export const Child = () => {
  const value = useContext(SimpleContext);

  return (
    <>
      <div>Child: {value}</div>
      <GrandChild />
    </>
  );
};
