import { useState } from "react";

export const StateList = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 1, 2, 3, 5]);
  const [newNumber, setNewNumber] = useState<number>(0);

  // 1. Lägga till värde i listan
  const addNumber = () => {
    setNumbers([...numbers, newNumber]);
  };

  // 2. Ta bort värde ur listan
  const removeNumber = (position: number) => {
    // setNumbers kommer att förändra listan i vårt state
    // numbers.filter kommer att ge oss en ny lista, som är
    // en position kortare än tidigare.

    // Vi kommer att ta bort det index i listan som har index === position
    // där position är den positionen som vi klickade på.
    setNumbers(numbers.filter((_, i) => i !== position));
  };

  // 3. Ändra ett värde i listan
  const changeValue = (index: number, increase: boolean) => {
    setNumbers(
      numbers.map((n, i) => {
        if (i === index) {
          return increase ? n + 1 : n - 1;
        } else {
          return n;
        }
      }),
    );
  };

  return (
    <>
      <input
        type="number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.valueAsNumber)}
      />
      <button onClick={addNumber}>Spara</button>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>
            <button onClick={() => changeValue(i, false)}>-</button>
            {n}
            <button onClick={() => changeValue(i, true)}>+</button>
            <button onClick={() => removeNumber(i)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
};
