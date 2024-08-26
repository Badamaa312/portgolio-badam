import { Menu } from "./Menu";
import { useState } from "react";
import { HamburgerIcon } from "./svg/buttons/Hamburger";

export const Hamburger = ({ handleMenu }) => {
  return (
    <div className="">
      <div className="">
        <button onClick={handleMenu}>
          <HamburgerIcon />
        </button>
      </div>
    </div>
  );
};