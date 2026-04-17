import { useState, type ChangeEvent } from "react";
import { Person } from "../models/Person";

export const StateObject = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 46, true, ""),
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text" || e.target.type === "color") {
      setPerson({ ...person, [e.target.name]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.name]: e.target.valueAsNumber });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.name]: e.target.checked });
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          value={person.age}
          onChange={handleChange}
          name="age"
        />
        <input
          type="checkbox"
          checked={person.isMarried}
          onChange={handleChange}
          name="isMarried"
        />
        <input
          type="color"
          value={person.color}
          onChange={handleChange}
          name="color"
        />
        <button>Spara</button>
      </div>
      <div>
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <input type="checkbox" checked={person.isMarried} />
        <p>{JSON.stringify(person)}</p>
      </div>
    </>
  );
};
