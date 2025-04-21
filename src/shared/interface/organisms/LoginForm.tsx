import { useState } from "react";
import Input from "../atoms/Input";
import FormGroup from "../molecules/FormGroup";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import ROUTES from "../../../constants/routes";

interface LoginDataType {
  email: string;
  password: string;
}

interface LoginFormPropsType {
  authService: Auth;
}

const LoginForm = ({ ...authService }: LoginFormPropsType) => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (name: string, value: string) => {
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onSubmitClickHandler = () => {
    signInWithEmailAndPassword(
      authService.authService,
      loginData.email,
      loginData.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(ROUTES.main);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <FormGroup
      title="Войти"
      submitText="Войти"
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

export default LoginForm;
