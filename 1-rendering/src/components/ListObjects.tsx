import { Person } from "../models/Person";

export const ListObjects = () => {
  const family: Person[] = [
    new Person("Sebastian", 46, true), // { name: "Sebastian", age: 46, isMarried: true }
    new Person("Hanna", 46, true),
    new Person("Astrid", 15, false),
    new Person("Alvar", 15, false),
  ];

  return (
    <div className="persons">
      {family.map((p) => (
        <div>
          <h3>{p.name}</h3>
          <p>{p.age}</p>
          <input type="checkbox" defaultChecked={p.isMarried} />
        </div>
      ))}
    </div>
  );
};
