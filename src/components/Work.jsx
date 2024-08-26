import { ButtonGray } from "./ButtonGray";
import { SumaIcon } from "./svg/SumaIcon";

export const Work = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center  bg-white dark:bg-gray-950">
        <div className="container  flex flex-col gap-12 pt-8 pb-8 ">
          <div className="container flex items-center justify-center">
            <ButtonGray title="Work" />
          </div>
          <div className="container flex items-center justify-center">
            <p className="pl-4 dark:text-gray-300">
              Some of the noteworthy projects I have built:
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="container grid md:grid-cols-2 gap-12  p-12 h-auto rounded-xl border-[1px] shadow-md dark:bg-gray-800 dark:border-gray-800 dark:p-0 ">
              <div className=" bg-gray-100 flex justify-center items-center gap-12 p-2 pt-8  md:p-8 rounded-xl dark:bg-gray-700">
                <img src="./ubcab.png" alt="" className="rounded-xl " />
              </div>
              <div className="flex flex-col justify-start gap-6 dark:p-8">
                <p className="font-bold dark:text-gray-300">UBCab</p>
                <p className=" text-justify dark:text-gray-300 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat aspernatur ducimus alias eos eius iste maiores,
                  laborum labore provident at eum voluptatibus. Fugit, eos!
                  Labore, eaque! Recusandae autem magni voluptas?
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonGray title="React" />
                  <ButtonGray title="Next.js" />
                  <ButtonGray title="Typescript" />
                  <ButtonGray title="Node.js" />
                  <ButtonGray title="TailwindCSS" />
                  <ButtonGray title="Cypress" />
                  <ButtonGray title="PostgreSQL" />
                  <ButtonGray title="Git" />
                  <ButtonGray title="Figma" />
                  <ButtonGray title="Storybook" />
                </div>
                <SumaIcon />
              </div>
            </div>
            <div className="container grid md:grid-cols-2 gap-12  p-12 h-auto rounded-lg border-[1px] shadow-md dark:bg-gray-800 dark:border-gray-800 dark:p-0">
              <div className=" bg-gray-100 flex justify-center items-center gap-12 p-4 pt-8 md:p-8 rounded-xl md:hidden dark:bg-gray-700">
                <img src="./mentorhub.png" alt="" className="rounded-xl " />
              </div>
              <div className="flex flex-col justify-start gap-6 dark:p-8 ">
                <p className="font-bold dark:text-gray-300">Mentorhub</p>
                <p className="text-justify  text-gray-600 dark:text-gray-300  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat aspernatur ducimus alias eos eius iste maiores,
                  laborum labore provident at eum voluptatibus. Fugit, eos!
                  Labore, eaque! Recusandae autem magni voluptas?
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonGray title="React" />
                  <ButtonGray title="Next.js" />
                  <ButtonGray title="Typescript" />
                  <ButtonGray title="Node.js" />
                  <ButtonGray title="TailwindCSS" />
                  <ButtonGray title="Cypress" />
                  <ButtonGray title="PostgreSQL" />
                  <ButtonGray title="Git" />
                  <ButtonGray title="Figma" />
                  <ButtonGray title="Storybook" />
                </div>
                <SumaIcon />
              </div>
              <div className=" bg-gray-100 md:flex hidden justify-center items-center gap-12 p-2 md:p-8 rounded-xl dark:bg-gray-700">
                <img src="./mentorhub.png" alt="" className="rounded-xl " />
              </div>
            </div>
            <div className="container grid md:grid-cols-2 gap-12  p-12 h-auto rounded-xl border-[1px] shadow-md dark:bg-gray-800 dark:border-gray-800 dark:p-0">
              <div className="  bg-gray-100 flex justify-center items-center gap-12 p-2 pt-8  md:p-8 rounded-xl  dark:bg-gray-700">
                <img src="./itoim.png" alt="" className="rounded-xl " />
              </div>
              <div className="flex flex-col justify-start gap-6 dark:p-8">
                <p className="font-bold dark:text-gray-300">iToim</p>
                <p className="text-justify dark:text-gray-300  text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat aspernatur ducimus alias eos eius iste maiores,
                  laborum labore provident at eum voluptatibus. Fugit, eos!
                  Labore, eaque! Recusandae autem magni voluptas?
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonGray title="React" />
                  <ButtonGray title="Next.js" />
                  <ButtonGray title="Typescript" />
                  <ButtonGray title="Node.js" />
                  <ButtonGray title="TailwindCSS" />
                  <ButtonGray title="Cypress" />
                  <ButtonGray title="PostgreSQL" />
                  <ButtonGray title="Git" />
                  <ButtonGray title="Figma" />
                  <ButtonGray title="Storybook" />
                </div>
                <SumaIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
