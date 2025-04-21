import { getAuth } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import SignUpForm from "../shared/interface/organisms/SignUpForm";
import LoginForm from "../shared/interface/organisms/LoginForm";
import ROUTES from "../constants/routes";
import { useNavigate } from "react-router";

function AuthPage() {
  const [isLoginForm, setLoginForm] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleFormChange = () => {
    setLoginForm(!isLoginForm);
  };

  const handleOverlayClick = (e: MouseEvent) => {
    if (e.target === overlayRef.current) {
      navigate(ROUTES.main);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOverlayClick);
    return () => document.removeEventListener("mousedown", handleOverlayClick);
  }, []);

  const formChanger = () => {
    if (isLoginForm) {
      return (
        <>
          <LoginForm authService={auth} />
          <p
            className="
          text-center mt-[20px]
        "
          >
            У вас еще нет аккаунта? Зарегистрируйтесь прямо{" "}
            <a
              className="cursor-pointer text-blue-500"
              onClick={handleFormChange}
            >
              сейчас
            </a>
            !
          </p>
        </>
      );
    } else {
      return (
        <>
          <SignUpForm authService={auth} />
          <p
            className="
          text-center mt-[20px]
        "
          >
            У вас уже есть аккаунт? Авторизуйтесь{" "}
            <a
              className="cursor-pointer text-blue-500"
              onClick={handleFormChange}
            >
              сейчас
            </a>
            !
          </p>
        </>
      );
    }
  };

  return (
    <div
      className="
      fixed z-50 w-full h-full top-[50%] left-[50%] transform-[translate(-50%,-50%)] backdrop-blur-sm
    "
      ref={overlayRef}
    >
      <div
        className="
        absolute w-full top-[50%] left-[50%] transform-[translate(-50%,-50%)] max-w-[767px] px-[32px] py-[32px] rounded-4xl shadow-2xl bg-[#f9f4ec] animate-slidein
      "
      >
        {formChanger()}
      </div>
    </div>
  );
}

export default AuthPage;
