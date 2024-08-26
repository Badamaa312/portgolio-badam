import { useState } from "react";
import { SunIcon } from "./svg/buttons/SunIcon";
import { MoonIcon } from "./svg/buttons/MoonIcon";

export const ToggleTheme = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col items-center justify-center text-black bg-white dark:bg-neutral-900 dark:text-white ">
      {dark ? (
        <button onClick={toggleTheme}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <SunIcon />
        </button>
      )}
    </div>
  );
};
