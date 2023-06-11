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
import { login, init, setUser } from "../redux/actions";
import SurpriseMeal from "./SurpriseMeal";
import ShowSelected from "./ShowSelected";
import Drink from "./Drink";



function Main () {
  const recipes = useSelector(state => state.recipes)
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const filteredByCat = useSelector(state => state.filteredByCat)
  const drink = useSelector(state => state.changeDrink)
  const[selected, setSelected] = useState()
  const [surprise, setSurprise] = useState()
  // const [loadedRescipes, setLoadedRecipes] = useState(false)
  // const [loadedUser, setLoadedUser] = useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    services.fetchRecipes().then((res) => {
      dispatch(init(res))
      const idx = Math.floor(Math.random()*res.length)
      setSelected(res[idx])
      setSurprise(res[idx])
      // setLoadedRecipes(true)
    })
    services.getUser().then((res) => {
      if(res.username) {
        dispatch(login())
        dispatch(setUser(res))
        // setLoadedUser(true)
        // console.log('useEffect ran')
      }
    })
  }, [])
  console.log(currentUser)

  

  // if(!loadedUser || !loadedRescipes) {
  //   // return <span className="loader">Loading</span>
  //   return (
  //     <div class="circles">
  //       <div class="circle1"></div>
  //       <div class="circle2"></div>
  //       <div class="circle3"></div>
  //       <div class="circle4"></div>
  //       <div class="circle5"></div>
  //       <div class="circle6"></div>
  //       <div class="circle7"></div>
  //       <div class="circle8"></div>
  //       <div class="circle9"></div>
  //       <div class="circle10"></div>
  //       <div class="circle11"></div>
  //       <div class="circle12"></div>
  //       <div class="circle13"></div>
  //       <div class="circle14"></div>
  //       <div class="circle15"></div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <>
  //     <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route path='/home' element={<Home />} />
  //         <Route path='/login' element={<LoginForm />} />
  //         <Route path='/create-recipe' element={<RecipeForm />} />
  //         <Route path='/recipe/:id' element={<ShowSelected />} />
  //         <Route path='surprise-me' element={<SurpriseMeal recipe={selected}/>}/>
  //         <Route path='/recipes' element={<RecipeList recipes={recipes} setSelected={setSelected}/>} />
  //         <Route path='/sign-up' element={<SignUp />} />
  //         <Route path='/user-profile' element={<Profile />} />
  //         <Route path='/drink' element={<Drink />} />
  //         <Route path='/:category/recipes' element={<RecipeList recipes={filteredByCat}/>} />
  //       </Routes>
  //     </Router>   
  //     </>
  //   )
  // }

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/create-recipe' element={<RecipeForm />} />
        <Route path='/recipe/:id' element={<ShowSelected />} />
        <Route path='surprise-me' element={<SurpriseMeal recipe={selected}/>}/>
        <Route path='/recipes' element={<RecipeList recipes={recipes} setSelected={setSelected}/>} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/user-profile' element={<Profile />} />
        <Route path='/drink' element={<Drink drink={drink} />} />
        <Route path='/:category/recipes' element={<RecipeList recipes={filteredByCat}/>} />
      </Routes>
    </Router>   
    </>
  )
}

export default Main