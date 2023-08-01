import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <p>
      Dynamic name which comes from PersonProp {props.name.first}{" "}
      {props.name.last}
    </p>
  );
};
