import type { ChangeEvent } from "react";

export const Input = () => {
  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleUserInput} />
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
};
