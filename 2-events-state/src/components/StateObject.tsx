import { useState } from "react";
import { Person } from "../models/Person";

export const StateObject = () => {
  //const person = new Person("Sebastian", 46, true);
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 46, true),
  );
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<number>(0);

  const changeName = () => {
    setPerson({ ...person, name: userName, age: userAge, isMarried: true });
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <input
        type="number"
        value={userAge}
        onChange={(e) => {
          setUserAge(e.target.valueAsNumber);
        }}
      />
      <button onClick={changeName}>Spara</button>

      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" defaultChecked={person.isMarried} disabled />
      </div>
    </>
  );
};
