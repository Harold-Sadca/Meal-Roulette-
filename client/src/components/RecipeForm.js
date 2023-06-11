//creating the recipe template

import { useState } from "react";
import services from "./Services";
import { useDispatch, useSelector } from "react-redux";
import { add} from "../redux/actions";
//TODO:styling
function RecipeForm () {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const recipes = useSelector(state => state.recipes)
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  function valSetter (e) {
    const id = e.target.id
    if (id == 'name') {
      setName(e.target.value)
    } else if(id == "steps") {
      setInstructions(e.target.value)
    } else if(id == 'ingredients') {
      setIngredients(e.target.value)
    } else if(id == 'description') {
      setDescription(e.target.value)
    } else if(id == 'category-selection'){
      setCategory(e.target.value)
    }
  }

  function makeDrinkRecipe() {
    if(!name || !instructions || !ingredients || !description || !category) {
      alert('Cant do that son!')
    } else {
      const newRecipe = {
        name,
        ingredients:ingredients.split('\n'),
        instructions,
        description,
        category
      }
      services.addRecipe(newRecipe).then((res) => {
        dispatch(add(res))
      })
      setName('')
      setInstructions('')
      setIngredients('')
      setDescription('')
      setCategory('')
    }
  }
  if (authenticated) {
    return (
      <div className="recipe-form-container">
        <div className="header">Add New Recipe</div>
        <div className="recipe-form">
          <label className="name-input">
            <span>Recipe Name:</span>
            <div className="name-and-category">
              <input id="name" value={name} onChange={(event) => {valSetter(event)}} type="text" name="name" placeholder='Name...' />
              <select onChange={(event) => {valSetter(event)}} className="category-selection" id="category-selection" >
                <option selected>Category</option>
                <option value="starters">Starter</option>
                <option value="mains">Mains</option>
                <option value="desserts">Dessert</option>
              </select>
            </div>
          </label>
          <div className="ingredients-instructions">
            <label className="ingredients-input">
              <span>Ingredients:</span>
              <textarea id="ingredients" value={ingredients} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Ingredients...'></textarea>
            </label>
            <label className="description-input">
              <span>Description:</span>
              <textarea id="description" value={description} onChange={(event) => {valSetter(event)}} type="text" name="description" placeholder='Description...'></textarea>
            </label>
            <label className="instructions-input">
              <span>Instructions:</span>
              <textarea id="steps" value={instructions} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Instructions...'></textarea>
            </label>
          </div>
          <button className="create-recipe btn-submit" onClick={makeDrinkRecipe}>Submit Recipe</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p className="unauthenticated-message">Please login to contribute to the website.
          Otherwise, you are still free to check the recipes but can't post one.
          Click the button below to login.
        </p>
        <button className="btn-submit">Take me to login page</button>
      </div>
    )
  }


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