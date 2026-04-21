import type { Person } from "../models/Person";
import { ShowPerson } from "./ShowPerson";

type PersonsProps = {
  persons: Person[];
};

export const Persons = ({ persons }: PersonsProps) => {
  return (
    <>
      {persons
        // .filter((p) => p.age < 40)
        .map((person) => (
          <ShowPerson person={person} />
        ))}
    </>
  );
};
