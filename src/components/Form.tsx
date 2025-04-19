import { useState } from "react";
import { useDispatch } from "react-redux";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../shared/interface/atoms/Input";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const dispatch = useDispatch();

  const auth = getAuth();

  const handleFormSubmit = (formData: FormData) => {
    // const email = formData.get("email");
    // const pass = formData.get("pass");

    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <form action={handleFormSubmit}>
      <Input type="email" name="email" label="Введите свой Email" />
      {/* <input
        type="password"
        name="pass"
        onChange={(e) => {
          setPass(e.currentTarget.value);
        }}
        placeholder="Password"
      />

      <button type="submit">Submit</button> */}
    </form>
  );
};

export default Form;
