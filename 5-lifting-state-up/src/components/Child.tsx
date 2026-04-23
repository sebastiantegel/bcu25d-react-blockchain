type ChildProps = {
  otherFunction: () => void;
};

export const Child = ({ otherFunction }: ChildProps) => {
  return (
    <div>
      <p>Child</p>
      <button onClick={otherFunction}>Klicka här</button>
    </div>
  );
};
