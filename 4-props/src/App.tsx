import { useState, type ChangeEvent } from "react";
import "./App.css";
// import { Parent } from "./components/Parent";
// import { ShowPerson } from "./components/ShowPerson";
import { Person } from "./models/Person";
import { Persons } from "./components/Persons";
import { Button } from "./components/Button";

function App() {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Hanna", 45, true),
  ]);

  const [person, setPerson] = useState<Person>(new Person("", 0, false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
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
      <section id="center">
        {/* <Parent /> */}
        {/* <ShowPerson person={person} /> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setPersons([...persons, person]);
            setPerson(new Person("", 0, false));
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
          <Button isDefault>Spara</Button>
        </form>
        <Persons persons={persons} />
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
