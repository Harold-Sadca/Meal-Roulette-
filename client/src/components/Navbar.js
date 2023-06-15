//navbar template, handles navbar nagivation
import { useDispatch, useSelector } from "react-redux";
import services from './Services';
import { logoutUser, removeUser } from "../redux/actions";
import Loader from './Loader'; 
import '../css/navbar.css'
import { useNavigate } from "react-router-dom";
const Navbar = ({currentUser}) => {
  const authenticated = useSelector(state => state.authenticated)
  const loadPage = useSelector(state => state.loadPage)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function logout () {
    services.logoutUser().then((res) => {
      if (res = 'Logged out') {
        dispatch(logoutUser())
        dispatch(removeUser())
      }
    })
  }

  function handleNav(e) {
    navigate(e.target.id)
  }

  if (!loadPage) {
    return <Loader />
  } else {
    return (
        <div className="navbar-main">
          <div className="navbar-options">
            <div className="navbar-el" onClick={(e) => {handleNav(e)}} id='/home' >
              Home
            </div>
            <div className="navbar-el" onClick={(e) => {handleNav(e)}} id='/create-recipe' >
              Add Recipe
            </div>
            <div className="navbar-el" onClick={(e) => {handleNav(e)}} id='/surprise-me'  >
              Surprise Me
            </div>
            <div className="navbar-el" onClick={(e) => {handleNav(e)}} id='/recipes' >
              Recipes
            </div>
          
          {authenticated ? (
              <>
                <div className="navbar-el"  onClick={(e) => {handleNav(e)}} id='/user-profile' >
                  Profile
                </div>
                <button className="log-btn" onClick={logout}>
                  Logout
                </button>
                <div className="navbar-el" style={{cursor:'default'}}  >
                  Hello, {currentUser.username? (currentUser.username) : <span>Guest</span>}
                </div>
              </>
          ): (
            <>
              <div className="navbar-el" onClick={(e) => {handleNav(e)}} id='/sign-up' >
                Sign Up
              </div>
              <button className="log-btn" onClick={(e) => {handleNav(e)}} id='/login'>
                Sign In
              </button>
            </>
          )
            }
          </div>
        </div>
    );
  }
};
  
export default Navbar;