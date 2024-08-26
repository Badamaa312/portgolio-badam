import { CopyIcon } from "./svg/CopyIcon";

export const Footer = () => {
  return (
    <main>
      <div className="w-full flex items-center justify-center dark:bg-gray-950 dark:text-white">
        <div className="container  flex justify-center items-center gap-2 pb-8">
          <CopyIcon/>
          <span>2024</span>
          <span>Greetings with ❤️️ from Ulaanbaatar</span>
        </div>
      </div>
    </main>
  );
};
