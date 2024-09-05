import { About } from "@/components/About";
import { ContactMe } from "@/components/ContactMe";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";

import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { useState } from "react";

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <main className="flex flex-col  items-center  justify-center  overflow-hidden relative">
      <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
      <div className=" w-screen justify-center flex flex-col gap-6 h-auto bg-white p-4 md:px-[80px] md:py-[16px] dark:bg-gray-950 relative ">
        <Header handleMenu={handleMenu} />
        <Hero />
      </div>
      <div className=" w-screen justify-center flex flex-col gap-6 h-auto bg-[#F9FAFB] p-4 md:px-[80px] md:py-[16px] dark:bg-gray-900 relative">
        <About />
      </div>
      <div className=" w-screen justify-center flex flex-col gap-6 h-auto bg-white p-4 md:px-[80px] md:py-[16px] dark:bg-gray-950 relative ">
        <Skills />
      </div>
      <div className="w-screen justify-center flex flex-col gap-6 h-auto bg-[#F9FAFB] p-4 md:px-[80px] md:py-[16px] dark:bg-gray-900 relative">
        <Experience />
      </div>
      <div className=" w-screen justify-center flex flex-col gap-6 h-auto bg-white p-4 md:px-[80px] md:py-[16px] dark:bg-gray-950 relative ">
        <Work />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
