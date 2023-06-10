//template to render random recipe

import { useState } from "react"
import Recipe from "./Recipe"
import services from "./Services"

function SurpriseMeal({surprise}) {

  if(surprise) {
    return(
      <div className="surprise-meal">
        <span className="header">Not to your taste? Don't worry I still got you</span>
        <Recipe recipe={surprise}/>
      </div>
    )
  }

}

export default SurpriseMeal