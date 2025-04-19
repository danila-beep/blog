import { useState } from "react";
import Input from "../atoms/Input";
import FormGroup from "../molecules/FormGroup";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";

interface SignUpDataType {
  email: string;
  password: string;
}

interface SignUpFormPropsType {
  authService: Auth;
}

const SignUpForm = ({ ...authService }: SignUpFormPropsType) => {
  const [signUpData, setSignUpData] = useState<SignUpDataType>({
    email: "",
    password: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const onSubmitClickHandler = () => {
    createUserWithEmailAndPassword(
      authService.authService,
      signUpData.email,
      signUpData.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <FormGroup
      title="Регистрация"
      submitText="Отправить"
      additionalClasses="max-w-[600px] mx-auto"
      onSubmitClickHandler={onSubmitClickHandler}
    >
      <Input
        changeRelativeHandler={handleInputChange}
        name="email"
        label="Введите свою почту"
      />
      <Input
        changeRelativeHandler={handleInputChange}
        name="password"
        label="Введите свой пароль"
      />
    </FormGroup>
  );
};

export default SignUpForm;
