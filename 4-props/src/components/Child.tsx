// { name: "Sebastian" }
type ChildProps = {
  name: string;
  age: number;
};

// export const Child = (props: ChildProps) => {
//   return (
//     <>
//       <span>
//         Välkommen {props.name} - {props.age}
//       </span>
//     </>
//   );
// };

export const Child = ({ name, age }: ChildProps) => {
  return (
    <>
      <span>
        Välkommen {name} - {age}
      </span>
    </>
  );
};
