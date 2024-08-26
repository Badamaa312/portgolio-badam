import { Button } from "./Button";
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
      <div className=" h-full w-full flex bg-white dark:bg-gray-400">
        <div className=" ml-[100px] h-full w-full flex flex-col px-8 dark:bg-gray-300 gap-4 pt-4 bg-black ">
          <div className="flex justify-between">
            <p className="  font-bold text-2xl">BADAMAA</p>
            <button onClick={handleMenu}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col  gap-[24px] py-2 pt-4 pb-4 dark:text-gray-900">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
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
