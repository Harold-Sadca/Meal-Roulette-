import RecipeForm from "./RecipeForm"
import LoginForm from "./Login";
import { useState, useEffect } from "react";
import services from "./Services";


function Main () {

  return (
    <>
      <RecipeForm />
      <LoginForm />
    </>
  )
}

export default Main