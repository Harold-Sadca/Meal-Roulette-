//displays the selected recipe via params

import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Recipe from "./Recipe";

function ShowSelected () {
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const {id} = useParams();
  const recipes = useSelector(state => state.recipes).filter(el => el._id == id);

  return (
    recipes.map((el) => {
      return <Recipe recipe={el} />
    })
  )
}


export default ShowSelected