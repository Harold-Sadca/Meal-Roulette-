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
import { logoutUser, removeUser } from "../redux/actions";
import Loader from './Loader';
//TODO:redo  
const Navbar = ({currentUser}) => {
  const authenticated = useSelector(state => state.authenticated)
  // const currentUser = useSelector(state => state.currentUser)
  const loadPage = useSelector(state => state.loadPage)
  const dispatch = useDispatch()

  function logout () {
    services.logoutUser().then((res) => {
      if (res = 'Logged out') {
        dispatch(logoutUser())
        dispatch(removeUser())
      }
    })
  }

  if (!loadPage) {
    return <Loader />
  } else {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/home' >
              Home
            </NavLink>
            <NavLink to='/create-recipe' >
              Add Recipe
            </NavLink>
            {/* <NavLink to='/recipe' activeStyle>
              Recipe
            </NavLink> */}
            <NavLink to='/surprise-me'  >
              Surprise Me
            </NavLink>
            <NavLink to='/recipes' >
              Recipes
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          {authenticated ? (
              <>
                <NavLink to='/user-profile' >
                  Profile
                </NavLink>
                <NavBtn onClick={logout}>
                  <NavBtnLink>Logout</NavBtnLink>
                </NavBtn>
                <NavLink >
                  Hello, {currentUser.username? (currentUser.username) : <span>Guest</span>}
                  {/* Hello, {currentUser.username} */}
                </NavLink>
              </>
          ): (
            <>
              <NavLink to='/sign-up' >
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
  }
};
  
export default Navbar;