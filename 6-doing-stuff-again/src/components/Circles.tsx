import type { CircleSelect } from "../models/CircleSelect";

type CirclesProps = {
  circles: CircleSelect[];
  handleSelected: (n: string) => void;
};

export const Circles = ({ circles, handleSelected }: CirclesProps) => {
  return (
    <ul>
      {circles.map((c, i) => (
        <li
          key={i}
          onClick={() => handleSelected(c.text)}
          className={c.selected ? "selected" : ""}
        >
          {c.text}
        </li>
      ))}
    </ul>
  );
};
