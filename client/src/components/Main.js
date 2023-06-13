//main template renders navbar, background and all other pages
//TODO:search bar, profile page, favourite

import RecipeForm from "./RecipeForm";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Login";
import SignUp from "./Register";
import { useState, useEffect } from "react";
import services from "./Services";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { login, init, setUser ,setRecipe, pageLoaded} from "../redux/actions";
import SurpriseMeal from "./SurpriseMeal";
import ShowSelected from "./ShowSelected";
import Drink from "./Drink";
import Loader from "./Loader";


//NOTE: navigate reloads the main page but does not run the useEffect
function Main () {
  const recipes = useSelector(state => state.recipes)
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const filteredByCat = useSelector(state => state.filteredByCat)
  const drink = useSelector(state => state.changeDrink)
  const selected = useSelector(state => state.setRecipe)
  const loadPage = useSelector(state => state.loadPage)
  const [surprise, setSurprise] = useState()
  const [loadedRescipes, setLoadedRecipes] = useState(false)
  const [loadedUser, setLoadedUser] = useState(false)
  // const [user, setUserState] = useState()
  const dispatch = useDispatch()


  useEffect(() => {
    services.fetchRecipes().then((res) => {
      dispatch(init(res))
      const idx = Math.floor(Math.random()*res.length)
      dispatch(setRecipe(res[idx]))
      setSurprise(res[idx])
      setLoadedRecipes(true)
    })
    services.getUser().then((res) => {
      if(res.username) {
        dispatch(setUser(res))
        dispatch(login())
        console.log(currentUser)
      }
      setLoadedUser(true)
      dispatch(pageLoaded())
    })
    console.log('use ran')
  }, [])

  if(!loadPage) {
    return (
      < Loader />
    )
  } else {
    // dispatch(pageLoaded())
    return (
      <>
      <Router>
        <Navbar currentUser={currentUser}/>
        {/* <Navbar currentUser={user}/> */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/create-recipe' element={<RecipeForm />} />
          <Route path='/recipe/:id' element={<ShowSelected />} />
          <Route path='surprise-me' element={<SurpriseMeal recipe={selected}/>}/>
          <Route path='/recipes' element={<RecipeList recipes={recipes}/>} />
          <Route path='/sign-up' element={<SignUp />} />
          {/* <Route path='/user-profile' element={<Profile currentUser={user}/>} /> */}
          <Route path='/user-profile' element={<Profile/>} />
          <Route path='/drink/:id' element={<Drink />} />
          <Route path='/:category/recipes' element={<RecipeList recipes={filteredByCat}/>} />
        </Routes>
      </Router>   
      </>
    )
  }

  // return (
  //   <>
  //   <Router>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/home' element={<Home />} />
  //       <Route path='/login' element={<LoginForm />} />
  //       <Route path='/create-recipe' element={<RecipeForm />} />
  //       <Route path='/recipe/:id' element={<ShowSelected />} />
  //       <Route path='/surprise-me' element={<SurpriseMeal recipe={selected}/>}/>
  //       <Route path='/recipes' element={<RecipeList recipes={recipes} />} />
  //       <Route path='/sign-up' element={<SignUp />} />
  //       <Route path='/user-profile' element={<Profile />} />
  //       <Route path='/drink/:id' element={<Drink drink={drink} />} />
  //       <Route path='/:category/recipes' element={<RecipeList recipes={filteredByCat}/>} />
  //     </Routes>
  //   </Router>   
  //   </>
  // )
}

export default Main