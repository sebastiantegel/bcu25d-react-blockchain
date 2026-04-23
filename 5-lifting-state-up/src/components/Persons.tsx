import type { Person } from "../models/Person";
import { Button } from "./Button";

type PersonsProps = {
  persons: Person[];
  deletePerson: (id: number) => void;
};

export const Persons = ({ persons, deletePerson }: PersonsProps) => {
  return (
    <div>
      {persons.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.age}</p>
          <input type="checkbox" defaultChecked={p.isMarried} disabled />
          <div>
            <Button
              onClick={() => {
                deletePerson(p.id);
              }}
            >
              Ta bort
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
