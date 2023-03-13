import { PersonListProps } from "./Person.types";

const PersonList = ({ names }: PersonListProps) => {
  const personElements = names.map((person) => (
    <h2 key={person.firstName}>
      {person.firstName} {person.lastName}
    </h2>
  ));
  return <div>{personElements}</div>;
};

export default PersonList;
