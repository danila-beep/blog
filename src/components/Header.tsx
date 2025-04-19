import { Link } from "react-router";
import Toggle from "./Toggle";
import ROUTES from "../constants/routes";

const Header = () => {
  return (
    <header
      className="
        xl:px-[160px]
        xl:gap-[48px]
        flex direction-row justify-end items-center gap-[24px] max-w-[1440px] left-[50%] transform-[translateX(-50%)]
        fixed px-[32px] py-[24px] w-[100vw] top-[0px] right-[0px]
        bg-[#f9f4ec]
    "
    >
      <Link
        to={ROUTES.main}
        className="
        xl:left-[160px]
        absolute left-[32px] top-[50%] transform-[translateY(-50%)] text-2xl font-bold
      "
      >
        .Blog
      </Link>

      <Link
        to={ROUTES.auth}
        className="
        text-end px-[24px] py-[12px] bg-black text-[#f9f4ec] rounded-2xl cursor-pointer border border-transparent transition-all
        hover:text-black hover:bg-[#f9f4ec] hover:border-black
      "
      >
        Auth
      </Link>
      <Toggle />
    </header>
  );
};

export default Header;
