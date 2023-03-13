import { useState } from "react";

// type of the logged in user
type AuthUser = {
  name: string;
  email: string;
};

export function User() {
  // using Generics and type assertion to bypass TS type inference
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  function handleLogin() {
    // no error since we type defined the useState hook above using generics
    setUser({ name: "Mike", email: "m@test.com" });
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button>Logout</button>
      {/* no need for optional chaining since we defined the type of user */}
      <div>User's name is {user.name} </div>
      <div>User's email is {user.email} </div>
    </div>
  );
}
