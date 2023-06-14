//navbar template, handles navbar nagivation


import React from 'react';
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
const Navbar = ({currentUser}) => {
  const authenticated = useSelector(state => state.authenticated)
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
    //navbar template was from w3schools...
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
            <NavLink to='/surprise-me'  >
              Surprise Me
            </NavLink>
            <NavLink to='/recipes' >
              Recipes
            </NavLink>
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