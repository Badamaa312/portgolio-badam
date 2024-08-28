import { useState } from "react";

export const HandleMenu=()=>{

const [isOpenMenu, setIsOpenMenu] = useState(false);

const handleMenu = () => {
  setIsOpenMenu(!isOpenMenu);
};
}