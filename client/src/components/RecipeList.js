import ShowRecipe from "./ShowRecipe"
import { useNavigate } from "react-router-dom";
import Preview from "./Preview";
//TODO:styling, add link to open recipe details
function RecipeList ({recipes, setSelected}) {

  // recipeList = recipes
  return (
    <>
      {recipes.map((recipe) => {
      return <Preview recipe={recipe} setSelected={setSelected}/>
    })}
    </>

  )
}

export default RecipeList
