import { PersonProps } from "./Person.types";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.firstName} {name.lastName}
    </div>
  );
};

export default Person;
