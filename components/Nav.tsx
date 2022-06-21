import React, { FunctionComponent, useEffect, useState } from "react";
import { useScrollPos } from "../hooks/useScrollPos";
import { useWindowSize } from "../hooks/useWindowSize";
import NavDesktop from "./NavDesktop";
import NavMobil from "./NavMobil";
import NavSticky from "./NavSticky";

const Nav: FunctionComponent = () => {
  const stickyOfset = 140;
  const smallMenu = 1350;
  const mobilMenu = 960;

  const [isSticky, setIsSticky] = useState(false);

  const size = useWindowSize();
  const scrollPos = useScrollPos();

  const setSticky = () => {
    if (
      (size.width <= smallMenu || scrollPos > stickyOfset) &&
      size.width > mobilMenu
    ) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    setSticky();
  }, [scrollPos, size]);

  return (
    <div>
      {size.width > mobilMenu && <NavDesktop isSticky={isSticky} />}
      {size.width <= mobilMenu && <NavMobil />}

      <NavSticky isSticky={isSticky} />
    </div>
  );
};

export default Nav;
