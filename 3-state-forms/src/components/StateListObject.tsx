import { useState, type ChangeEvent } from "react";
import { Person } from "../models/Person";

export const StateListObject = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 46, true, ""),
  ]);
  const [person, setPerson] = useState<Person>(new Person("", 0, false, ""));

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

  const addPerson = () => {
    setPersons([...persons, person]);
  };

  const removePerson = (person: Person) => {
    setPersons(persons.filter((p) => p.name !== person.name));
  };

  const handleBirthday = (person: Person) => {
    setPersons(
      persons.map((p) => {
        if (p.name === person.name) {
          return { ...p, age: p.age + 1 };
        } else {
          return p;
        }
      }),
    );
  };

  return (
    <>
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPerson();
            setPerson(new Person("", 0, false, ""));
          }}
        >
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
        </form>
      </section>
      <section>
        {persons.map((person) => (
          <div key={person.name}>
            <h3>{person.name}</h3>
            <p>{person.age}</p>
            <input type="checkbox" checked={person.isMarried} />
            <input type="color" value={person.color} />
            <div>
              <button onClick={() => removePerson(person)}>Ta bort</button>
              <button onClick={() => handleBirthday(person)}>Fyll år</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
