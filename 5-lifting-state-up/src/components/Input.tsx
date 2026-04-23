import type { ChangeEvent } from "react";

type InputProps = {
  type: string;
  value?: string | number;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  labelText: string;
  placeholder?: string;
};

export const Input = ({
  type,
  value,
  onChange,
  name,
  checked,
  labelText,
  placeholder,
}: InputProps) => {
  return (
    <div className="formElement">
      <label>{labelText}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        checked={checked}
        name={name}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};
