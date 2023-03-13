import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme.primary.main,
    color: theme.primary.text,
  };
  return <div style={styles}>Theme applied component</div>;
};

export default Box;
