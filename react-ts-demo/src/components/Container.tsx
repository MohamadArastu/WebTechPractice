import { CSSProperties } from "react";

type ContainerProps = {
  style: CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <p style={props.style}>This paragraph is using css as properties</p>;
};
