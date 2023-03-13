// base type
type NumberType = {
  value: number;
};

// never type with optional chaining
type PositiveType = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeType = NumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroType = NumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

// Union type
type RandomNumberProps = PositiveType | NegativeType | ZeroType;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
