import { useState } from "react";

export const State = () => {
  //let name = "Sebastian";
  const [name, setName] = useState<string>("Sebastian");

  const handleChangeName = () => {
    // name = "Hanna";
    setName("Hanna");

    // if (name === "Sebastian") {
    //   setName("Hanna");
    // } else {
    //   setName("Sebastian");
    // }
  };

  console.log(name);
  return (
    <>
      <p onClick={handleChangeName}>{name}</p>
    </>
  );
};
