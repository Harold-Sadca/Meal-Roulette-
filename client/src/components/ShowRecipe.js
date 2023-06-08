
function ShowRecipe ({recipe}) {

  return (
    <>
      <div className="recipe-name">{recipe.name}</div>
      <div className="recipe-ingredients">{recipe.ingredients}</div>
      <div className="recipe-steps">{recipe.steps}</div>
    </>
  )
}

export default ShowRecipe;