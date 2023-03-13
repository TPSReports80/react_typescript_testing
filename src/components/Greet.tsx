type GreetProps = {
  children: string;
};

const Greet = ({ children }: GreetProps) => {
  return <p>{children}</p>;
};

export default Greet;
