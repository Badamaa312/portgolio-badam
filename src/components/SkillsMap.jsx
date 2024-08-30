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

export const SkillsMap = () => {
  const skills = [
    {
      icon: <JavascriptIcon />,
      iconname: "Javascript",
    },
    {
      icon: <TypescriptIcon />,
      iconname: "Typescript",
    },

    {
      icon: <ReactIcon />,
      iconname: "React",
    },

    {
      icon: <NextjsIcon />,
      iconname: "Next.js",
    },

    {
      icon: <NodejsIcon />,
      iconname: "Node.js",
    },

    {
      icon: <ExIcon />,
      iconname: "Express.js",
    },

    {
      icon: <NestjsIcon />,
      iconname: "Nest.js",
    },

    {
      icon: <SocketIcon />,
      iconname: "Socket.io",
    },

    {
      icon: <GitIcon/>,
      iconname: "PostgreSQL",
    },

    {
      icon: <MongoIcon />,
      iconname: "MongoDB",
    },

    {
      icon: <SaccIcon />,
      iconname: "Sass/Scss",
    },

    {
      icon: <TailwindIcon />,
      iconname: "Tailwindcss",
    },

    {
      icon: <FigmaIcon />,
      iconname: "Figma",
    },

    {
      icon: <CypressIcon />,
      iconname: "Cypress",
    },
    {
      icon: <StorybookIcon />,
      iconname: "Storybook",
    },

    {
      icon: <GitIcon />,
      iconname: "Git",
    },
  ];

  //   const elements = [];
  //   for (let i = 0; i < skills.length; i++) {
  //     const element = <div>{skills[i].icon}</div>;

  //     elements.push(element);
  //   }

  const elements = skills.map((element) => {
    return (
      <main>
        <div>{element.icon}</div>
        <div>{element.iconname}</div>
      </main>
    );
  });

  return (
    <main className="flex gap-12 flex-wrap  items-center justify-center">
      {elements}
    </main>
  );
};
