//navbar template, handles navbar nagivation

import React, { useState } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { useDispatch, useSelector } from "react-redux";
//TODO:redo  
const Navbar = () => {
  const authenticated = useSelector(state => state.authenticated)


  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/create-recipe' activeStyle>
            Add Recipe
          </NavLink>
          <NavLink to='/recipe' activeStyle>
            Recipe
          </NavLink>
          <NavLink to='/surprise-me'  activeStyle>
            Surprise Me
          </NavLink>
          <NavLink to='/recipes' activeStyle>
            Recipes
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {!authenticated && 
          <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
          </NavBtn>
          }
      </Nav>
    </>
  );
};
  
export default Navbar;