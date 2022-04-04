import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/products" activeStyle={{ color: "black" }}>
            Product List
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "black" }}>
            About
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
