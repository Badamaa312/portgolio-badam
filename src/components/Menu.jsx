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
      className={`absolute transition-all duration-500 z-50 ease-in-out ${
        isOpenMenu ? "right-0" : "right-[-100%]"
      } flex flex-col items-center justify-center top-0 h-full w-screen dark:bg-gray-300 dark:text-gray-950 bg-black text-gray-300`}
    >
      <div className=" h-full w-full flex bg-gray-800 dark:bg-gray-400">
        <div className=" ml-[100px] h-full w-full flex flex-col px-8 dark:bg-gray-300 gap-4 pt-4 bg-black ">
          <div className="flex justify-between">
            <button onClick={handleMenu}>
            <p className="  font-bold text-2xl">BADAMAA</p>
            </button>
            <button onClick={handleMenu}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col  gap-[12px] py-2 pt-4 pb-4 dark:text-gray-900">
          <button onClick={handleMenu}>
              <ScrollMenuAbout/>
            </button>
            <button onClick={handleMenu}>
              <ScrollMenuSkills/>
            </button>
            <button onClick={handleMenu}>
              <ScrollMenuWork/>
            </button>
            <button onClick={handleMenu}>
              <ScrollMenuExperience/>
            </button>
            <button onClick={handleMenu}>
             <ScrollMenuContactMe/>
            </button>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Switch Theme </p>
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
