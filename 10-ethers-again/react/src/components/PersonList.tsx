import type { Persons } from "../models";
import type { Person } from "../models/Person";
import { removePerson } from "../services/personService";

type PersonListType = {
  persons: Person[];
  writeContract: Persons | undefined;
  getPersonsFromChain: () => void;
};

export const PersonList = ({
  persons,
  writeContract,
  getPersonsFromChain,
}: PersonListType) => {
  const handleRemovePerson = async (id: bigint) => {
    if (!writeContract) return;

    const success = await removePerson(id, writeContract);

    if (success) {
      getPersonsFromChain();
    } else {
      console.error("Error while removing person");
    }
  };

  return (
    <>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            <span>
              {p.name} - {p.age}
            </span>
            <input type="checkbox" defaultChecked={p.isMarried} disabled />
            <button onClick={() => handleRemovePerson(p.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
};
