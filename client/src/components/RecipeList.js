//template to render multiple recipes, might not be needed
import Preview from "./Preview";
//TODO:styling, add link to open recipe details
//TODO:make it so it renders when navigating, clicking it 'Recipe' again is not ideal
import { useSelector } from "react-redux";

function RecipeList ({recipes, setSelected}) {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)

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
