import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isDefault?: boolean;
};

export const Button = ({ children, onClick, isDefault }: ButtonProps) => {
  return (
    <button className={isDefault ? "btn" : "btn-special"} onClick={onClick}>
      {children}
    </button>
  );
};
