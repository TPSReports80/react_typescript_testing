import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// using generics to set type of initial context value
export const UserContext = createContext<UserContextType | null>(null);

type UserContextProviderProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  // typing useState
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
