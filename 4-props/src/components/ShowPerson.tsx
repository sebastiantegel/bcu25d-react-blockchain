import type { Person } from "../models/Person";
import { Button } from "./Button";

// {
//   person: {
//     name: "",
//     age: 0,
//     isMarried: false,
//     id: 123457,
//   }
// }
type ShowPersonProps = {
  person: Person;
};

export const ShowPerson = ({ person }: ShowPersonProps) => {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <div>
        <input type="checkbox" defaultChecked={person.isMarried} disabled />
      </div>
      <span>{person.id}</span>
      <Button
        onClick={() => {
          console.log("Fyll år");
        }}
      >
        Fyll år
      </Button>
    </div>
  );
};
