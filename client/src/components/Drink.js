//template for rendering a single drink
import { useSelector } from "react-redux"
import { useState } from "react"


function Drink() {

  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const drink = useSelector(state => state.changeDrink)
  console.log(drink)
  
  const [language, setLanguage] = useState('english')

  // name: strDrink,
  // category: strCategory,
  // ingredients,
  // alcoholic: strAlcoholic,
  // english: strInstructions,
  // deutsch: checkNull(strInstructionsDE),
  // spanish: checkNull(strInstructionsES),
  // french: checkNull(strInstructionsFR),
  // italian: checkNull(strInstructionsIT)
  function languageSetter(e) {
    setLanguage(e.target.value)
  }


  return (
    <div className='drink-container' key={drink._id}>
      <div className="drink-name">{drink.name}</div>
      <div className="drink-details">
        <div className="drink-ingredients">
        <span>Ingredients</span>
          {
            drink.ingredients.map(res => <div>{res}</div>)
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
    </div>
  )
}

export default Drink