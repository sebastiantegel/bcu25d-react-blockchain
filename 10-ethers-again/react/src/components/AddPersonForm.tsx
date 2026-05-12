import { useState, type SubmitEvent } from "react";
import type { AddPerson } from "../models/AddPerson";
import type { Persons } from "../models";
import { createPerson } from "../services/personService";

type AddPersonFormProps = {
  writeContract: Persons;
  getPersonsFromChain: () => void;
};

export const AddPersonForm = ({
  writeContract,
  getPersonsFromChain,
}: AddPersonFormProps) => {
  const [person, setPerson] = useState<AddPerson>({
    name: "",
    age: 0,
    isMarried: false,
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    const success = await createPerson(
      person.name,
      person.age,
      person.isMarried,
      writeContract,
    );

    if (success) {
      getPersonsFromChain();
    } else {
      console.error("Could not save person to chain");
    }

    setPerson({
      name: "",
      age: 0,
      isMarried: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="age">Ålder:</label>
        <input
          type="number"
          id="age"
          value={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: e.target.valueAsNumber })
          }
        />
      </div>

      <div>
        <label htmlFor="ismarried">Gift:</label>
        <input
          type="checkbox"
          id="ismarried"
          checked={person.isMarried}
          onChange={(e) =>
            setPerson({ ...person, isMarried: e.target.checked })
          }
        />
      </div>

      <button>Spara</button>
    </form>
  );
};
