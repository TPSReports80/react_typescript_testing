import { Name } from "./Person.types";

type FormProps = {
  formData: Name;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ formData, handleChange }: FormProps) => {
  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
