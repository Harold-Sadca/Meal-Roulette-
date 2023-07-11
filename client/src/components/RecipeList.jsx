//template to render multiple recipes, might not be needed
import Preview from "./Preview";

function RecipeList ({recipes}) {

  return (
    <>
      {recipes.map((recipe) => {
      return <Preview key={recipe._id} recipe={recipe}/>
    })}
    </>

  )
}

export default RecipeList
