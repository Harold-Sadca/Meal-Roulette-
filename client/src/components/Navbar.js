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
import services from './Services';
import { login, logout, add, remove, init, setUser, removeUser } from "../redux/actions";
//TODO:redo  
const Navbar = () => {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  function logout () {
    services.logoutUser().then((res) => {
      if (res = 'Logged out') {
        dispatch(logout())
        dispatch(removeUser())
      }
    })
  }

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

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {currentUser ? (
            <>
              <NavLink to='/profile' activeStyle>
                Profile
              </NavLink>
              <NavBtn onClick={logout}>
                <NavBtnLink>Logout</NavBtnLink>
              </NavBtn>
              <NavLink activeStyle>
                Hello, {currentUser.username}
                {/* Hello, {currentUser.username} */}
              </NavLink>
            </>
        ): (
          <>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </>

        )
          }
      </Nav>
    </>
  );
};
  
export default Navbar;