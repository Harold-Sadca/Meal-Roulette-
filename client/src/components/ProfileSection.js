import { useSelector } from "react-redux"


function ProfileSection({removeRecipe, openRecipe, typemessage, type, recipe}){
  const currentUser = useSelector(state => state.currentUser)

  return(
    <div className="user-food-favourites">
    <span id="recipe-label">{typemessage} Foods:</span>
    <span className="content" >
      {currentUser[type].length ? (
            currentUser[type].map((el) => {
              return <span className="fav-name-con">
                <span className="fav-name" key={el._id} id={el._id} onClick={(e) => {openRecipe(e, recipe)}}>{el.name}</span>
                <button id={el._id} className="remove-fav" onClick={(e)=> {removeRecipe(e, recipe, type)}}>X</button>
                </span>
            })
          ) : <span className="meal">You dont have any {typemessage} recipe yet.</span>}
    </span>
    </div>
  )
}

export default ProfileSection