// Syfte: Innehålla CRUD-operationer för objekttypen Person

import type { Persons } from "../models";
import type { Person } from "../models/Person";

export const getPersons = async (
  readContract: Persons | undefined,
): Promise<Person[]> => {
  if (!readContract) return [];

  const indexes = await readContract.getIndexList();
  const promises = indexes.map(
    async (index: bigint) => await readContract.persons(index),
  );

  const persons = await Promise.all(promises);
  return persons;
};

export const createPerson = async (
  name: string,
  age: number,
  isMarried: boolean,
  writeContract: Persons,
) => {
  try {
    const receipt = await writeContract.createPerson(name, age, isMarried);
    await receipt.wait();

    return true;
  } catch {
    return false;
  }
};

export const removePerson = async (id: bigint, writeContract: Persons) => {
  try {
    const receipt = await writeContract.removePerson(id);
    await receipt.wait();

    return true;
  } catch {
    return false;
  }
};
