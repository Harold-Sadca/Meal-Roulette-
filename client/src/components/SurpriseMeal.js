//template to render random recipe
import { useState } from "react"
import Recipe from "./Recipe"
import services from "./Services"
import { useDispatch, useSelector } from "react-redux"
import { setDrink } from "../redux/actions"
import { useNavigate } from "react-router-dom"

function SurpriseMeal({recipe}) {
  const [random, setRandom] = useState(recipe)
  const recipes = useSelector(state => state.recipes)
  const drink = useSelector(state => state.changeDrink)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  function generateRandom () {
    const idx = Math.floor(Math.random()*recipes.length)
    setRandom(recipes[idx])
  }

  function extractIng(drink) {
    const ingredients = []
    for(let i = 1; i < 16; i++) {
      if (drink['strMeasure'+i] != null && drink['strIngredient'+i] != null) {
        const ing = `${drink['strMeasure'+i]} ${drink['strIngredient'+i]}`
        ingredients.push(ing.replace('\n\r', ''))

      } else if (drink['strIngredient'+i] != null){
        const ing = `${drink['strIngredient'+i]}`
        ingredients.push(ing.replace('\n\r', ''))
      }
    }
    return ingredients
  }

  function checkNull(ins, lang) {
    if(ins != null) {
      return ins
    } else {
      return `Sorry I don't speak ${lang}.`
    }
  }

  function getDrink() {
    services.fetchDrink().then((res) => {
      const {strAlcoholic, strCategory, strDrink, strInstructions, strInstructionsDE, strInstructionsES, strInstructionsFR, strInstructionsIT} = res.drinks[0]
      const ingredients = extractIng(res.drinks[0])
      const newDrink = {
        name: strDrink,
        category: strCategory,
        ingredients,
        alcoholic: strAlcoholic,
        english: strInstructions,
        deutsch: checkNull(strInstructionsDE, 'Bratwurst'),
        spanish: checkNull(strInstructionsES, 'Taco'),
        french: checkNull(strInstructionsFR, 'Baguette'),
        italian: checkNull(strInstructionsIT, 'Pasta')
      }
      services.saveDrink(newDrink).then((res) => {
        dispatch(setDrink(newDrink))
        navigate(`/drink/${newDrink._id}`)
        console.log(res)
      })

    })
  }

    return(
      <div className="surprise-meal">
        <span className="header">Want to leave it to chance?</span>
        <div className="generate">
          <a className="generate-btn" onClick={generateRandom}>Generate Me A Random Meal!</a>
          <a className="generate-btn" onClick={getDrink}>Generate Me A Random Drink!</a>
        </div>
        {/* <Recipe recipe={random}/> */}
      </div>
    )


}

export default SurpriseMeal