import RecipeForm from "./RecipeForm";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Login";
import SignUp from "./Register";
import { useState, useEffect } from "react";
import services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";



function Main () {
  const [recipes, setRecipes] = useState([])
  const[selected, setSelected] = useState()

  useEffect(() => {
    services.fetchRecipes().then((res) => {
      setRecipes(res)
      setSelected(res[2])
    })
  }, [])

  function logout () {
    services.logoutUser().then((res) => {
      console.log(res)
    })
  }
console.log(selected)
  return (
    <>
    <button onClick={logout}>Logout</button>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/create-recipe' element={<RecipeForm />} />
        <Route path='/recipe' element={<Recipe recipe={selected}/>} />
        <Route path='/recipes' element={<RecipeList recipes={recipes} setSelected={setSelected}/>} />
        {/* <Route path='/blogs' component={Blogs} /> */}
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
    {/* <Footer /> */}
      {/* <RecipeForm /> */}
      {/* <LoginForm /> */}
      {/* <SignUp /> */}
      
    </>
  )
}

export default Main