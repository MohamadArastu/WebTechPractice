import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
