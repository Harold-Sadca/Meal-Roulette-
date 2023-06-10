//useless for now
//TODO:styling
function ShowRecipe ({recipe}) {

  return (
    <>
      <div className="recipe-name">{recipe.name}</div>
      <div className="recipe-ingredients">{recipe.instructions}</div>
    </>
  )
}

export default ShowRecipe;