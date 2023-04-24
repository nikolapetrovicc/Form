/*
  Napraviti mini-library za form submission.
  Implementacija u pozadini treba da koristi context API i da se ne oslanja na postojece npm pakete za forme.
  Sva logika (input[value], input[onChange], form[onSumbit]) treba da se nalazi u Form i FormInput
  komponentama tako da nije izlozena korisniku library-a.

  Ispod je primjer komponente koja bi koristila library na zeljeni nacin. Ukoliko ovakva struktura
  bude u browseru rezultovala renderovanju forme koja na submit loguje userInfo objekat sa izmjenjenim vrijednostima,
  zadatak se smatra uspjesno zavrsenim.
	
  Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.

  Koristiti React i TypeScript.

  Puno srece ;-)
*/
import { useState } from "react";
import { Form, FormInput } from "./components";
import "./App.css";

export interface IFormData {
  email: string;
  age: number;
  name: string;
  phone: {
    ext: string;
    number: string;
  };
}

const initValue: IFormData = {
  email: "example@alea.com",
  age: 30,
  name: "John Doe",
  phone: {
    ext: "00387",
    number: "65/123-456",
  },
};

export const PageWithForm = () => {
  // Example
  const [userInfo, setUserInfo] = useState<IFormData>(initValue);

  return (
    <div>
      <Form initialValues={userInfo} onSubmit={setUserInfo}>
        <FormInput
          type="email"
          required
          name="email"
          placeholder="your@email.com"
          label="Email"
          value={userInfo.email}
        />
        <FormInput
          type="number"
          name="age"
          placeholder="30"
          label="Age"
          value={userInfo.age}
        />
        <FormInput
          type="text"
          required
          name="name"
          placeholder="John Doe"
          label="Name"
          value={userInfo.name}
        />
        <FormInput
          type="text"
          name="phone.ext"
          placeholder="00387"
          label="Phone ext"
          value={userInfo.phone.ext}
        />
        <FormInput
          type="text"
          name="phone.number"
          placeholder="65/123-456"
          label="Phone number"
          value={userInfo.phone.number}
        />
        <FormInput type="submit" value="Submit" />
      </Form>
    </div>
  );
};
