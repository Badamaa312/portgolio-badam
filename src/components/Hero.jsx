import { ButtonBox } from "./ButtonBox";
import { ButtonGray } from "./ButtonGray";
import { SkillBox } from "./SkillBox";
import { JavascriptIcon } from "./svg/JavaScriptIcon";
import { LocationIcon } from "../components/svg/Location";
import {
  CypressIcon,
  FigmaIcon,
  GitIcon,
  MongoIcon,
  NextjsIcon,
  SaccIcon,
  StorybookIcon,
  TailwindIcon,
} from "./svg/NextJS";
import { ExIcon, NestjsIcon, NodejsIcon, SocketIcon } from "./svg/Nodejs";
import { ReactIcon } from "./svg/ReactIcon";
import { TypescriptIcon } from "./svg/TypescriptIcon";
import { GithubIcon } from "./svg/GithubIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
import { FigmasmallIcon } from "./svg/FigmasmallIcon";

export const Hero = () => {
  return (
    <div className="">
      <div className=" w-full flex items-center justify-center dark:bg-gray-950 dark:text-white pl-8 pr-8">
        <div className="  container md:grid grid-cols-2 items-center ">
          <div className="flex justify-center items-center md:hidden border-8 w-full border-white ">
            <img src="./tom-mobile.png" alt="" />
          </div>
          <div className="md:flex flex-col ">
            <h1 className="font-bold  flex text-5xl gap-2 ">
              Hi, I'm Badamaa
              {/* <img src="./hi.png" alt="" className="w-[62px] h-[62px]" /> */}
            </h1>
            <p className="text-gray-600 text-[16px] dark:text-white pt-3">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
            <div className="flex pt-12 gap-2 items-center">
              <LocationIcon />
              <p className="text-gray-600 dark:text-white">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex pb-12 items-center gap-2 pl-2">
              <img src="./point.png" className="w-[8px] h-[8px] " alt="" />
              <p className="text-gray-600 dark:text-white">
                Avialable for new projects
              </p>
            </div>
            <div className="flex ">
              <GithubIcon />
              <TwitterIcon />
              <FigmasmallIcon />
            </div>
          </div>
          <div className="relative md:flex justify-end hidden">
            <img
              src="./image.png"
              alt=""
              className="w-[280px] h-[320px] absolute "
            />
            <img
              src="./back.png"
              alt=""
              className="w-[280px] h-[320px] mt-[20px] mr-[20px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
