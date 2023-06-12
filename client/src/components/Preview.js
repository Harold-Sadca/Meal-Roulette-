//preview template, shows recipe name and short description

import { useNavigate, useRoutes } from "react-router-dom";
function Preview ({recipe}) {
  const navigate = useNavigate();
  function clickHandler (e) {
    navigate(`/recipe/${recipe._id}`)
  }

  return (
    <div id = {recipe._id} key={recipe._id} onClick={(e) => { clickHandler()}}  className="recipe-preview-container">
      <div id = {recipe._id} className="recipe-preview-name">{recipe.name}</div>
      <div id = {recipe._id} className="recipe-preview-description">{recipe.description}</div>
    </div>
  )
}

export default Preview