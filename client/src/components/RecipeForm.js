//creating the recipe template

import { useState } from "react";
import services from "./Services";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useDispatch, useSelector } from "react-redux";
//TODO:styling
function RecipeForm () {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('')
  const recipes = useSelector(state => state.recipes)

  function valSetter (e) {
    const id = e.target.id
    if (id == 'name') {
      setName(e.target.value)
    } else if(id == "steps") {
      setInstructions(e.target.value)
    } else if(id == 'ingredients') {
      setIngredients(e.target.value)
    }
  }

  function makeRecipe() {
    if(!name || !instructions) {
      alert('Cant do that son!')
    } else {
      const newRecipe = {
        name,
        ingredients:ingredients.split('\n'),
        instructions
      }
      console.log(newRecipe, 'new')
      services.addRecipe(newRecipe).then((res) => {
        console.log(res)
      })
      setName('')
      setInstructions('')
      setIngredients('')
    }
  }
  // console.log(recipesR,'form')

  return (
    <div className="recipe-form-container">
      <div className="header">Add New Recipe</div>
      <div className="recipe-form">
        <label className="name-input">
          <span>Recipe Name:</span>
          <input id="name" value={name} onChange={(event) => {valSetter(event)}} type="text" name="name" placeholder='Name...' />
        </label>
        <div className="ingredients-instructions">
          <label className="ingredients-input">
            <span>Ingredients:</span>
            <textarea id="ingredients" value={ingredients} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Ingredients...'></textarea>
          </label>
          <label className="instructions-input">
            <span>Instructions:</span>
            <textarea id="steps" value={instructions} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Instructions...'></textarea>
          </label>
        </div>
        <button className="create-recipe btn-submit" onClick={makeRecipe}>Submit Recipe</button>
      </div>
    </div>
  )
}

export default RecipeForm

// return (
//   <div className="recipe-form-container">
//     <div className="header">Add New Recipe</div>
//     <div className="recipe-form">
//       <label className="name-input">
//         <span>Recipe Name:</span>
//         <input id="name" value={name} onChange={(event) => {valSetter(event)}} type="text" name="name" placeholder='Insert a name...' />
      // </label>
      // <div className="ingredients-input">
      //   <span>Ingredients:</span>
      //   <textarea id="ingredients" value={ingredients} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Insert ingredients...'></textarea>
      // </div>
      // <label className="steps-input">
      //   <span>Steps:</span>
      //   <textarea id="steps" value={steps} onChange={(event) => {valSetter(event)}} type="text" name="steps" placeholder='Insert steps'></textarea>
      // </label>
//       <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button>
//     </div>
//   </div>
// )