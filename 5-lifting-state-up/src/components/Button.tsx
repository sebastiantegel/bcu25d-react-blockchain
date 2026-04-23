import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isSave?: boolean;
};

export const Button = ({ children, onClick, isSave }: ButtonProps) => {
  return (
    <button className={`btn ${isSave ? "save" : "danger"}`} onClick={onClick}>
      {children}
    </button>
  );
};
