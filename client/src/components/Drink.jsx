//template for rendering a single drink
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import services from "./Services"
import { setDrink , pageReloading, pageLoaded} from "../redux/actions"
import { useNavigate } from "react-router-dom"
import '../css/drink.css'


function Drink() {

  const currentUser = useSelector(state => state.currentUser)
  const drink = useSelector(state => state.changeDrink)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [language, setLanguage] = useState('english')
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

  function handleDrink (e) {
    const id = e.target.id
    if (id == 'yay') {
      dispatch(pageReloading())
      services.saveDrink(drink).then((res) => {
        currentUser.drinkFavourites.push(res)
        dispatch(pageLoaded())
        navigate(`/user-profile`)
      })
    } else if(id == 'nay') {
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
      })
    }
  }

  function languageSetter(e) {
    setLanguage(e.target.value)
  }


  return (
    <div className='drink-container' key={drink.name}>
      <div className="drink-name">{drink.name}</div>
      <div className="drink-details">
        <div className="drink-ingredients">
        <span>Ingredients</span>
          {
            drink.ingredients.map(res => <a key={res} href={"https://www.google.com/search?q="+res} target="_blank" className="ingred">{res}</a>)
          }
        </div>
        <div className="drink-instructions">
          <span>Instructions</span>
          <div className="language-select">
              <select onChange={(event) => {languageSetter(event)}} className="drink-lang-select" id="drink-lang-select" >
                <option value={language} selected>Select Language</option>
                <option value="english">English</option>
                <option value="deutsch">Deutsch</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="italian">Italian</option>
              </select>
              <p>{drink[language]}</p>
          </div>
        </div>
      </div>
      <div className="yay-or-nay">
        <button className="generate-btn yay" id="yay" onClick={(e) => {handleDrink(e)}}>Yay!</button>
        <button className="generate-btn nay" id="nay" onClick={(e) => {handleDrink(e)}} >Nay!</button>
      </div>
    </div>
  )
}

export default Drink