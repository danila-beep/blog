import Logo from "../assets/Logo.png";
import { NavLink } from "react-router";
import ROUTES from "../constants/routes";

type HeaderItemType = {
  id: number;
  text: string;
  isActive: boolean;
  path: string;
};

const Header = () => {
  const headerItems: Array<HeaderItemType> = [
    {
      id: 1,
      text: "Home",
      isActive: true,
      path: ROUTES.main,
    },
    {
      id: 2,
      text: "News",
      isActive: false,
      path: ROUTES.news,
    },
    {
      id: 3,
      text: "Podcasts",
      isActive: false,
      path: ROUTES.podcasts,
    },
    {
      id: 4,
      text: "Resources",
      isActive: false,
      path: ROUTES.resourses,
    },
  ];

  const baseHeaderItemsStyles =
    "p-[14px] border rounded-[8px] cursor-pointer transition block";
  const unactiveHeaderItemStyles =
    "text-gray-500 border-transparent bg-transparent";
  const activeHeaderItemStyles = "text-gray-100 border-gray-700 bg-[#141414]";

  return (
    <header className="flex direction-row justify-between items-center px-[160px] py-[24px] bg-[#1A1A1A] fixed w-[100vw] top-[0px] right-[0px]">
      <picture>
        <source srcSet={Logo} type="image/png" />
        <img className="w-[178px]" alt="Header logo" />
      </picture>

      <nav>
        <ul className="flex direction-row gap-[40px] items-center justify-center">
          {headerItems.map((headerItem) => {
            return (
              <li key={headerItem.id} onClick={() => {}}>
                <NavLink
                  to={headerItem.path}
                  className={({ isActive }) => {
                    return isActive
                      ? `${activeHeaderItemStyles} ${baseHeaderItemsStyles}`
                      : `${unactiveHeaderItemStyles} ${baseHeaderItemsStyles}`;
                  }}
                >
                  {headerItem.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <button className="bg-yellow-400 rounded-[10px] px-[20px] py-[14px]">
        Contact us
      </button>
    </header>
  );
};

export default Header;
