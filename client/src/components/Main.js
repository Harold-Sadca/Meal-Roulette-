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
import { useDispatch, useSelector } from "react-redux";
import { login, logout, add, remove } from "../redux/actions";



function Main () {
  const recipes = useSelector(state => state.recipes)
  const authenticated = useSelector(state => state.authenticated)
  // const [recipes, setRecipes] = useState([])
  const[selected, setSelected] = useState()
  const [surprise, setSurprise] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    services.fetchRecipes().then((res) => {
      dispatch(add(res))
      const idx = Math.floor(Math.random()*res.length)
      setSelected(res[idx])
      setSurprise(res[idx])
    })
    services.getUser().then((res) => {
      //TODO: response will be changed to return the user instead
      //so check if there is a user or not then send a dispatch
      //setting the user to the response
      //then check if there is a user instead of checking if its authenticated
      if(res == "Successfully Authenticated") {
        dispatch(login())
      }
    })
  }, [])
  if(selected) {
    // console.log(selected.name)
  }
  console.log(authenticated)

  function logout () {
    services.logoutUser().then((res) => {
      // console.log(res)
    })
  }

  // console.log(recipesR, 'main')
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/create-recipe' element={<RecipeForm />} />
        <Route path='/recipe' element={<Recipe recipe={selected}/>} />
        <Route path='surprise-me' element={<Recipe recipe={selected}/>}/>
        <Route path='/recipes' element={<RecipeList recipes={recipes} setSelected={setSelected}/>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>   
    </>
  )
}

export default Main