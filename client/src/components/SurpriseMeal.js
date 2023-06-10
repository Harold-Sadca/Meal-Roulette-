//template to render random recipe

import { useState } from "react"
import Recipe from "./Recipe"
import services from "./Services"

function SurpriseMeal({surprise}) {

  if(surprise) {
    return <Recipe recipe={surprise}/>
  }

}

export default SurpriseMeal