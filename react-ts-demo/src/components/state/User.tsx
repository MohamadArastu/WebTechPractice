import { useState } from "react";

type AuthUser = {
  username: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handelLogin = () => {
    setUser({
      username: "Momo",
      email: "Momo@momo.com",
    });
  };
  const handelLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handelLogin}>Login</button>
      <button onClick={handelLogout}>Logout</button>
      <h2>Username: {user?.username}</h2>
      <h2>Email: {user?.email}</h2>
    </div>
  );
};
