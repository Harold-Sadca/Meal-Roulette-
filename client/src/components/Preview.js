import { useNavigate, useRoutes } from "react-router-dom";
function Preview ({recipe, setSelected}) {
  const navigate = useNavigate();
  function clickHandler (e) {
    setSelected(recipe)
    navigate(`/recipe/${recipe._id}`)
  }

  return (
    <div id = {recipe._id} onClick={(e) => { clickHandler()}} className="recipe-preview">{recipe.name}</div>
  )
}

export default Preview