//template to render random recipe
import services from "./Services"
import { useDispatch, useSelector } from "react-redux"
import { setDrink } from "../redux/actions"
import { useNavigate } from "react-router-dom"

function SurpriseMeal({recipe}) {
  const recipes = useSelector(state => state.recipes)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  function generateRandom () {
    const idx = Math.floor(Math.random()*recipes.length)
    const id = recipes[idx]._id
    navigate(`/recipe/${id}`)
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
      dispatch(setDrink(newDrink))
      navigate('/drink/1')
    })
  }

  return(
    <div className="surprise-meal">
      <span className="header" id="meal-header">Want to leave it to chance?</span>
      <div className="generate">
        <a className="generate-btn" onClick={generateRandom}>Generate Me A Random Meal!</a>
        <a className="generate-btn" onClick={getDrink}>Generate Me A Random Drink!</a>
        {/* the one below is a nice to have but not finished yet */}
        {/* <a className="generate-btn" onClick={() => {navigate('/menu-generator')}}>Eating Out? Generate From The Menu!</a> */}
      </div>
    </div>
  )


}

export default SurpriseMeal