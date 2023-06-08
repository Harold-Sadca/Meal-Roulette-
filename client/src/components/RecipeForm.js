import { useState } from "react";
import services from "./Services";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
//TODO:styling
function RecipeForm () {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('')

  function valSetter (e) {
    const id = e.target.id
    if (id == 'name') {
      setName(e.target.value)
    }
  }

  function makeRecipe() {
    if(!name || !instructions) {
      alert('Cant do that son!')
    } else {
      const newRecipe = {
        name,
        instructions
      }
      console.log(newRecipe)
      services.addRecipe(newRecipe).then((res) => {
        console.log(res)
      })
      setName('')
      setInstructions('')
    }
  }

  return (
    <div className="recipe-form-container">
      {/* <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button> */}
      <div className="header">Add New Recipe</div>
      <div className="recipe-form">
        <label className="name-input">
          <span>Recipe Name:</span>
          <input id="name" value={name} onChange={(event) => {valSetter(event)}} type="text" name="name" placeholder='Insert a name...' />
        </label>
        <div className="">
          <ReactQuill className="instructions-input" theme="snow" value={instructions} onChange={setInstructions} />
          <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button>
        </div>
      </div>
      {/* <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button> */}
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
//       </label>
//       <div className="ingredients-input">
//         <span>Ingredients:</span>
//         <textarea id="ingredients" value={ingredients} onChange={(event) => {valSetter(event)}} type="text" name="ingredients" placeholder='Insert ingredients...'></textarea>
//       </div>
//       <label className="steps-input">
//         <span>Steps:</span>
//         <textarea id="steps" value={steps} onChange={(event) => {valSetter(event)}} type="text" name="steps" placeholder='Insert steps'></textarea>
//       </label>
//       <button className="create-recipe" onClick={makeRecipe}>Submit Recipe</button>
//     </div>
//   </div>
// )