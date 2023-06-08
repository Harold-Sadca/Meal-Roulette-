import RecipeForm from "./RecipeForm";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from "./Login";
import SignUp from "./Register";
import { useState, useEffect } from "react";
import services from "./Services";
import Navbar from "./Navbar";


function Main () {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    services.fetchRecipes().then((res) => {
      setRecipes(res)
      console.log(res)
    })
  }, [])

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/create-recipe' element={<RecipeForm />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/recipes' element={<RecipeList recipes={recipes} />} />
        {/* <Route path='/blogs' component={Blogs} /> */}
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
      {/* <RecipeForm /> */}
      {/* <LoginForm /> */}
      {/* <SignUp /> */}
    </>
  )
}

export default Main