//template to render random recipe
import { useState } from "react"
import Recipe from "./Recipe"
import services from "./Services"
import { useSelector } from "react-redux"

function SurpriseMeal({recipe}) {
  const [random, setRandom] = useState(recipe)
  const recipes = useSelector(state => state.recipes)
  function generateRandom () {
    const idx = Math.floor(Math.random()*recipes.length)
    setRandom(recipes[idx])
  }

  // if(surprise) {
  //   return(
  //     <div className="surprise-meal">
  //       <span className="header">Not to your taste? Don't worry I still got you</span>
  //       <Recipe recipe={surprise}/>
  //     </div>
  //   )
  // }
    return(
      <div className="surprise-meal">
        <span className="header">Want to leave it to chance?</span>
        <button className="generate btn-submit" onClick={generateRandom}>Generate Me A Meal!</button>
        <Recipe recipe={random}/>
      </div>
    )


}

export default SurpriseMeal