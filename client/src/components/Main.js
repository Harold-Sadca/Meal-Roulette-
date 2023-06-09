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
  const recipesR = useSelector(state => state.recipesR)
  const [recipes, setRecipes] = useState([])
  const[selected, setSelected] = useState()
  const [surprise, setSurprise] = useState()
  const[isAuthenticated, setIsAuthenticated] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    services.fetchRecipes().then((res) => {
      dispatch(add(res))
      setRecipes(res)
      const idx = Math.floor(Math.random()*res.length)
      setSelected(res[idx])
      setSurprise(res[idx])
    })
  }, [])
  if(selected) {
    // console.log(selected.name)
  }
  // console.log(surprise)

  function logout () {
    services.logoutUser().then((res) => {
      // console.log(res)
    })
  }

  console.log(recipesR, 'main')
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home isAuthenticated={isAuthenticated}/>} />
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