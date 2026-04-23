import { useState, type ChangeEvent } from "react";
import { Person } from "../models/Person";
import { Button } from "./Button";
import { Input } from "./Input";

type AddPersonProps = {
  addPerson: (person: Person) => void;
};

export const AddPerson = ({ addPerson }: AddPersonProps) => {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPerson(person);
        setPerson(new Person("", 0, false));
      }}
    >
      <Input
        type="text"
        value={person.name}
        onChange={handleChange}
        name="name"
        labelText="Förnamn"
        placeholder="T.ex. Sebastian"
      />
      <Input
        type="number"
        value={person.age}
        onChange={handleChange}
        name="age"
        labelText="Ålder"
        placeholder="46"
      />
      <Input
        type="checkbox"
        checked={person.isMarried}
        onChange={handleChange}
        name="isMarried"
        labelText="Civilstatus"
      />
      <Button isSave>Spara</Button>
    </form>
  );
};
