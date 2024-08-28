import { Button } from "./Button";
import { Hamburger } from "./HamburgerBox";
import { ScrollAbout } from "./ScrollAbout";
import { ScrollContactMe } from "./ScrollContactMe";
import { ScrollExperience } from "./ScrollExperience";
import { ScrollMenuAbout } from "./ScrollMenuAbout";
import { ScrollSkills } from "./ScrollSkills";
import { ScrollWork } from "./ScrollWork";
import { ToggleTheme } from "./ToggleTheme";


export const Header = ({ handleMenu }) => {
  return (
    <div className="">
      <div className="w-full flex justify-around bg-white dark:bg-black dark:text-white ">
        <div className="container flex justify-between items-center px-8">
          <p className="w-[76px] text-center font-bold text-3xl">BADAMAA</p>
          <div className=" hidden md:flex justify-center items-center gap-[10px] py-2 ">
        <ScrollAbout/>
         <ScrollSkills/>
         <ScrollExperience/>
         <ScrollWork/>
         <ScrollContactMe/>
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
