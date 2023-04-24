import { createContext, ReactNode } from "react";
import { IFormData } from "../../App";
import "./styles.css";

type FormContextProps = {
  initialValues: IFormData;
  onSubmit: any;
  children: ReactNode;
};

export const UserContext = createContext<any>(null);

const Form = ({ initialValues, onSubmit, children }: FormContextProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <UserContext.Provider value={{ initialValues, onSubmit }}>
      <h1 className="title">MaxSolution</h1>
      <h4 className="description">Please enter your details.</h4>
      <form onSubmit={handleSubmit}>{children}</form>
    </UserContext.Provider>
  );
};

export default Form;
