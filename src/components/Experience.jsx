import { ButtonGray } from "./ButtonGray";

export const Experience = () => {
  return (
    <main className="dark:bg-gray-900 ">
      <div className="w-full flex items-center justify-center  bg-gray-50 dark:bg-gray-900 ">
        <div className="container  flex flex-col gap-12 pt-8 pb-8 ">
          <div className="container flex items-center justify-center">
            <ButtonGray title="Experience" />
          </div>
          <div className="container flex items-center justify-center">
            <p className="dark:text-white">
              Here is a quick summary of my most recent experiences:
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" w-[896px] bg-white rounded-xl grid md:grid-cols-3 md:p-[16px] pt-4 pb-4 ml-4 mr-4 dark:bg-gray-800">
              <div>
                <img src="./upwork.png" alt="" width={206} height={28} />
              </div>
              <div className="pt-4 flex md:hidden dark:text-gray-300 ">
                Nov 2021 - Present
              </div>
              <div className="">
                <p className="text-xl font-bold pb-3 pt-3 dark:text-gray-300">
                  Sr. Frontend Developer
                </p>

                <ul className="list-disc list-item pl-4  dark:text-gray-300">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-base  justify-end hidden md:flex  dark:text-gray-300">
              Nov 2021 - Present
            </div>
          </div>
          <div className="flex justify-center">
            <div className="  w-[896px] bg-white rounded-xl grid md:grid-cols-3 md:p-[16px] pt-4 pb-4 ml-4 mr-4 dark:bg-gray-800">
              <div>
                <img src="./upwork.png" alt="" width={206} height={28} />
              </div>
              <div className="pt-4 md:hidden flex dark:text-gray-300">
                Jul 2017 - Oct 2021
              </div>
              <div className="">
                <p className="text-xl font-bold pb-3 pt-3 dark:text-gray-300">
                  Team Lead
                </p>

                <ul className="list-disc list-item pl-4  dark:text-gray-300">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                </ul>
              </div>
              <div className="justify-end hidden md:flex dark:text-gray-300">
                Jul 2017 - Oct 2021
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="w-[896px] bg-white rounded-xl grid md:grid-cols-3 md:p-[16px] pt-4 pb-4 ml-4 mr-4 dark:bg-gray-800">
              <div>
                <img src="./upwork.png" alt="" width={206} height={28} />
              </div>
              <div className="pt-4 md:hidden flex dark:text-gray-300">
                Dec 2015 - May 2017
              </div>
              <div className="">
                <p className="text-xl font-bold pb-3 pt-3 dark:text-gray-300">
                  Full Stack Developer
                </p>
                <ul className="list-disc list-item pl-4  dark:text-gray-300">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo officiis distinctio vero temporibus doloremque
                  </li>
                </ul>
              </div>
              <div className=" justify-end hidden md:flex dark:text-gray-300">
                Dec 2015 - May 2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
