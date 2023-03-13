import { createContext } from "react";
import { theme } from "./theme";

// we need to create context with an initial context state
export const ThemeContext = createContext(theme);

// create the theme context provider to wrap around our components

type ThemeContextProviderProps = {
  children?: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
