//template for rendering a single drink

import { useState } from "react"


function Drink({drink}) {

  
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
      <div className="drink-ingredients">
        {
          drink.ingredients.map(res => <span>{res}</span>)
        }
      </div>
      <div className="drink-instructions">
        <span>Instructions</span>
        <div className="name-and-category">
            <select onChange={(event) => {languageSetter(event)}} className="drink-lang-select" id="drink-lang-select" >
              <option selected>Select Language</option>
              <option value="english">English</option>
              <option value="deutsch">Deutsch</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="italian">Italian</option>
            </select>
        </div>
        <p>{drink[language]}</p>
      </div>
    </div>
  )
}

export default Drink