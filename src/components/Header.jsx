import { Button } from "./Button";
import { Hamburger } from "./HamburgerBox";
import { ToggleTheme } from "./ToggleTheme";

export const Header = ({ handleMenu }) => {
  return (
    <div className="">
      <div className="w-full flex justify-around bg-white dark:bg-black dark:text-white ">
        <div className="container flex justify-between items-center px-8">
          <p className="w-[76px]  text-center font-bold text-3xl">BADAMAA</p>
          <div className=" hidden md:flex justify-center items-center gap-[24px] py-2 ">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <ToggleTheme />
            <Button />
          </div>
          <div className="block md:hidden">
            <Hamburger handleMenu={handleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};
