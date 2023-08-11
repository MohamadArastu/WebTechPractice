import { ComponentType } from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateComponent = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

export const Private = ({
  isLoggedIn,
  component: Component,
}: PrivateComponent) => {
  if (isLoggedIn) return <Component name="Momo" />;
  return <Login />;
};
