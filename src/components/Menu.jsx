import { Button } from "./Button";
import { HandleMenu } from "./HandleMenu";
import { ScrollMenuAbout } from "./ScrollMenuAbout";
import { ScrollMenuContactMe } from "./ScrollMenuContactMe";
import { ScrollMenuExperience } from "./ScrollMenuExperience";
import { ScrollMenuSkills } from "./ScrollMenuSkills";
import { ScrollMenuWork } from "./ScrollMenuWork";
import { CloseIcon } from "./svg/buttons/CloseIcon";
import { HamburgerIcon } from "./svg/buttons/Hamburger";
import { ToggleTheme } from "./ToggleTheme";

export const Menu = ({ handleMenu, isOpenMenu }) => {
  return (
    <div
      className={`absolute transition-all duration-500 z-50 backdrop-blur ease-in-out ${
        isOpenMenu ? "right-0" : "right-[-100%]"
      } flex flex-col items-center justify-center top-0 h-full w-screen `}
    >
      <div className=" h-full w-full flex  ">
        <div className=" ml-[100px] h-full w-full flex flex-col px-8 bg-gray-50 gap-4 pt-4 dark:bg-black drop-shadow-sm">
          <div className="flex justify-between">
            <button onClick={handleMenu}>
            <p className="font-bold text-2xl text-gray-900 dark:text-gray-300">BADAMAA</p>
            </button>
            <button onClick={handleMenu}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col  gap-[12px] py-2 pt-4 pb-4 text-gray-900">
          <span className="" onClick={handleMenu}>
              <ScrollMenuAbout/>
            </span>
            <span onClick={handleMenu}>
              <ScrollMenuSkills/>
            </span>
            <span onClick={handleMenu}>
              <ScrollMenuWork/>
            </span>
            <span onClick={handleMenu}>
              <ScrollMenuExperience/>
            </span>
            <span onClick={handleMenu}>
             <ScrollMenuContactMe/>
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="dark:text-gray-300 text-gray-900">Switch Theme </p>
                <ToggleTheme />
              </div>

              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
