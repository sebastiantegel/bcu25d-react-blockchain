import type { ethers } from "ethers";
import { useState } from "react";

type PersonListType = {
  readContract: ethers.Contract | undefined;
};

export const PersonList = ({ readContract }: PersonListType) => {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    if (!readContract) return;

    const indexes = await readContract.getIndexList();
    console.log(indexes);

    const promises = indexes.map(
      async (index: number) => await readContract.persons(index),
    );
    console.log(promises);

    const persons = await Promise.all(promises);
    console.log(persons);
    setPersons(persons);
  };

  return (
    <>
      <button onClick={getPersons}>Hämta personer</button>
      <ul>
        {persons.map((p) => (
          <li key={p.id}>
            <span>
              {p.name} - {p.age}
            </span>
            <input type="checkbox" defaultChecked={p.isMarried} disabled />
          </li>
        ))}
      </ul>
    </>
  );
};
