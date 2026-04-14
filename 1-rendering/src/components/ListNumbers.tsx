export const ListNumbers = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8];

  //   const lis = numbers.map((n, i) => {
  //     return <li key={i}>{n}</li>;
  //   });

  //   const lis = numbers.map((n, i) => <li key={i}>{n}</li>);

  return (
    <ul>
      {numbers.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
};
