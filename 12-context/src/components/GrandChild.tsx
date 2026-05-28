import { useContext } from "react";
import { SimpleContext } from "../contexts/SimpleContext";

export const GrandChild = () => {
  const value = useContext(SimpleContext);
  return <>GrandChild: {value}</>;
};
