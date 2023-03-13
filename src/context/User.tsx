import { UserContext } from "./UserContext";
import { useContext } from "react";
const User = () => {
  const userContext = useContext(UserContext);

  function handleLogin() {
    if (userContext) {
      userContext.setUser({ name: "Mike", email: "m@m.com" });
    }
  }
  function handleLogout() {
    if (userContext) {
      userContext.setUser(null);
    }
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>The user's name is {userContext?.user?.name}</p>
      <p>The user's email is {userContext?.user?.email}</p>
    </div>
  );
};

export default User;
