import { Persons } from "./Persons";
import { AddPerson } from "./AddPerson";
import { useState } from "react";
import type { Person } from "../models/Person";

export const PersonApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const removePerson = (id: number) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  const addPerson = (person: Person) => {
    setPersons([...persons, person]);
  };

  return (
    <>
      <AddPerson addPerson={addPerson} />
      <Persons persons={persons} deletePerson={removePerson} />
    </>
  );
};
