type BoxProps = {
  id: number;
  on: boolean;
  handleClick: () => void;
};

const Box = (props: BoxProps) => {
  const styles = {
    backgroundColor: props.on ? "#fff" : "red",
  };
  return <div style={styles} className="box" onClick={props.handleClick}></div>;
};

export default Box;
