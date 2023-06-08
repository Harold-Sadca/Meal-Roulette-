import ShowRecipe from "./ShowRecipe"

function RecipeList ({recipes}) {

  function clickHandler (e) {
    console.log(e.target.id);
  }

  // recipeList = recipes
  return (
    <>
      {recipes.map((recipe) => {
      return <div id = {recipe._id} onClick={(e) => { clickHandler(e)}} className="recipe-link">{recipe.name}</div>
    })}
    </>

  )
}

export default RecipeList
