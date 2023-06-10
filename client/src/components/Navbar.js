import React, { useState } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";
import LoginForm from './Login';
import services from './Services';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
//TODO:redo  
const Navbar = () => {
  const [surprise, setSurprise] = useState()
  const navigate = useNavigate();

  function generateSurprise() {
    services.fetchRecipes().then((res) => {
      const idx = Math.floor(Math.random()*res.length)
      setSurprise(res[idx])
      console.log(surprise)
      navigate(`/surprise-me/${surprise._id}`)
    })
  }

  // function clickHandler (e) {
  //   setSelected(recipe)
  //   navigate(`/recipe/${recipe._id}`)
  // }
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
          <NavLink to='/surprise-me' activeStyle>
          {/* <NavLink to='/surprise-me' onClick={generateSurprise} surprise={surprise} activeStyle> */}
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
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;