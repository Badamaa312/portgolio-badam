import { ButtonGray } from "./ButtonGray";
import { SkillBox } from "./SkillBox";
import { SkillsMap } from "./SkillsMap";
import { JavascriptIcon } from "./svg/JavaScriptIcon";
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
export const Skills = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container  flex flex-col gap-12 pt-8 pb-8">
          <div className="container  flex flex-col gap-4 pt-8 pb-8">
            <div className="container flex items-center justify-center">
              <ButtonGray title="Skills" />
            </div>
            <div className="container flex items-center justify-center">
              <p className="dark:text-white">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </div>
          <div className="">
            <SkillsMap />
            {/* <div className="flex gap-12 flex-wrap  items-center justify-center">
              <SkillBox
                iconComponent={<JavascriptIcon />}
                text={"Javascript"}
              />
              <SkillBox
                iconComponent={<TypescriptIcon />}
                text={"Typescript"}
              />
              <SkillBox iconComponent={<ReactIcon />} text={"React"} />
              <SkillBox iconComponent={<NextjsIcon />} text={"Next.js"} />
              <SkillBox iconComponent={<NodejsIcon />} text={"Node.js"} />
              <SkillBox iconComponent={<ExIcon />} text={"Express.js"} />
              <SkillBox iconComponent={<NestjsIcon />} text={"Nest.js"} />
              <SkillBox iconComponent={<SocketIcon />} text={"Socket.io"} />

              <div>
                <img width={62} height={64} src="./elephant.png" alt="" />
                <p>PostgreSQL</p>
              </div>

              <SkillBox iconComponent={<MongoIcon />} text={"MongoDB"} />
              <SkillBox iconComponent={<SaccIcon />} text={"Sass/Scss"} />
              <SkillBox iconComponent={<TailwindIcon />} text={"Tailwindcss"} />
              <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
              <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
              <SkillBox iconComponent={<StorybookIcon />} text={"Storybook"} />
              <SkillBox iconComponent={<GitIcon />} text={"Git"} />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
