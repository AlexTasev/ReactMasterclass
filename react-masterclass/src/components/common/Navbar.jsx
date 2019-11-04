import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav>
      <Logo fontSize={[12]} />
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
};

export default Navbar;
