import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handelLogin = () => {
    setLoggedIn(true);
  };
  const handelLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handelLogin}>Login</button>
      <button onClick={handelLogout}>Logout</button>
      <p>User is {isLoggedIn ? "Logged in" : "Logged out"}</p>
    </div>
  );
};
