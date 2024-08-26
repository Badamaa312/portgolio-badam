import { ButtonGray } from "./ButtonGray";
import { DoubleIcon } from "./svg/DoubleIcon";
import { FigmasmallIcon } from "./svg/FigmasmallIcon";
import { GithubIcon } from "./svg/GithubIcon";
import { MailIcon } from "./svg/MailIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import { TwitterIcon } from "./svg/TwitterIcon";
export const ContactMe = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container  flex flex-col gap-12 pt-8 pb-8">
          <div className="container  flex flex-col gap-4 pt-8 pb-8">
            <div className="container flex items-center justify-center">
              <ButtonGray title="Get in touch" />
            </div>
            <div className="container flex items-center justify-center">
              <p className="text-center dark:text-gray-300">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 pt-8 ">
              <MailIcon />
              <p className="text-3xl font-bold dark:text-gray-300">
                badam@pinecone.mn
              </p>
              <DoubleIcon />
            </div>
            <div className="flex justify-center items-center gap-2 pb-8">
              <PhoneIcon />
              <p className="text-3xl font-bold dark:text-gray-300">
                976-99061058
              </p>
              <DoubleIcon />
            </div>
            <div>
              <span className="flex justify-center">
                You may also find me on these platforms!
              </span>
              <div className="flex gap-4 justify-center">
                <GithubIcon />
                <TwitterIcon />
                <FigmasmallIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
