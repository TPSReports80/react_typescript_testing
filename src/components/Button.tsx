type ButtonProps = {
  children: string;
  variant: "primary" | "secondary";
  handleClick: () => void;
};

const Button = ({ children, variant, handleClick }: ButtonProps) => {
  return (
    <button className={variant} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
