import { getAuth } from "firebase/auth";
import SignUpForm from "../shared/interface/organisms/SignUpForm";

function AuthPage() {
  const auth = getAuth();

  return (
    <section
      className="
      max-w-[1440px] mx-auto px-[32px]
    "
    >
      <SignUpForm authService={auth} />
    </section>
  );
}

export default AuthPage;
