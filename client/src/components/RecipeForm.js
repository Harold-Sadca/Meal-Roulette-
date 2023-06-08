import { useState } from "react";
import services from "./Services";

function RecipeForm () {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('');

  function valSetter (e) {
    const id = e.target.id
    if (id == 'name') {
      setName(e.target.value)
    } else if (id == 'ingredients') {
      setIngredients(e.target.value)
    } else if (id == 'steps') {
      setSteps(e.target.value)
    }
  }

  function makeRecipe() {
    if(!name || !ingredients || !steps) {
      alert('Cant do that son!')
    } else {
      const newRecipe = {
        name,
        ingredients: ingredients.split('\n'),
        steps
      }
      console.log(newRecipe)
      services.addRecipe(newRecipe).then((res) => {
        console.log(res)
      })
      setName('')
      setIngredients('')
      setSteps('')
    }
  }

  return (
    <div className="form-container">
      <div className="header">Add New Recipe</div>
      <div className="form">
        <label className="name-input">
        <span>Recipe Name:</span>
          <input id="name" value={name} onChange={(event) => {valSetter(event)}} type="text" name="name" placeholder='Insert a name...' />
        </label>
        <div className="ingredients-input">
          <span>Ingredients:</span>
          <textarea id="ingredients" value={ingredients} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Insert ingredients...'></textarea>
        </div>
        <label className="steps-input">
        <span>Steps:</span>
          <textarea id="steps" value={steps} onChange={(event) => {valSetter(event)}} type="text" name="steps" placeholder='Insert steps'></textarea>
        </label>
        <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button>
      </div>
    </div>
  )
}

export default RecipeForm