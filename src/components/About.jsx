import { ButtonGray } from "./ButtonGray";

export const About = () => {
  return (
    <main className="dark:bg-gray-900 ">
      <div className="w-full flex items-center justify-center  bg-gray-50 dark:bg-gray-900 ">
        <div className="container  flex flex-col gap-12 pt-8 pb-8 ">
          <div className="container flex items-center justify-center">
            <ButtonGray title="About me" />
          </div>

          <div>
            <div className="container grid md:grid-cols-2 gap-12 justify-center items-center pl-32px] pr-[32px]">
              <div className="flex justify-center items-center md:hidden border-8 w-full border-white ">
                <img src="./mobilework.png" alt="" />
              </div>
              <div className="hidden md:flex justify-center items-center ml-8">
                <div className="w-full relative  justify-center items-center">
                  <img
                    src="./heroback.png"
                    alt=""
                    className="  mt-[20px] ml-[40px] "
                  />
                  <img
                    src="./hero.png"
                    alt=""
                    className="border-8 absolute top-0 left-0 right-8"
                  />
                </div>
              </div>
              <div className="dark:text-white pl-[16px]">
                <h2 className=" ">Curious about me? Here you have it:</h2>
                <p className=" text-gray-600 text-[16px] dark:text-white">
                  I'm a designer turned full stack developer, passionate about
                  React.js and Node.js. I excel in blending technical and visual
                  aspects to craft exceptional digital products, prioritizing
                  user experience, precise design, and optimized code.
                </p>
                <p className=" text-gray-600 text-[16px] pt-4 pb-4 dark:text-white">
                  Since starting my web development journey in 2015, I've
                  embraced challenges and kept up with the latest tech trends.
                  Now in my early thirties, seven years in, I'm building
                  cutting-edge web apps using Next.js, TypeScript, Nestjs,
                  Tailwindcss, Supabase, and more.
                </p>
                <p className="text-gray-600 text-[16px] dark:text-white">
                  With a progressive mindset, I enjoy the entire product
                  development process, from ideation to execution. Off duty,
                  you'll find me on Twitter, tracking startup journeys, or
                  unwinding. Follow me for tech insights and public project
                  updates on Twitter or GitHub.
                </p>
                <p className="text-gray-600 text-[16px] dark:text-white">
                  Finally, some quick bits about me.
                </p>
                <ul className="list-disc gap-12 text-gray-600 text-[16px] pt-4 pb-4 flex">
                  <div className="pl-8 dark:text-white">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                  </div>
                  <div>
                    <li className="dark:text-white">Avid learner</li>
                  </div>
                </ul>
                <p className="text-gray-600 text-[16px] dark:text-white">
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
