//user profile page template
//contents: user info, user favourites, user recipes
//TODO:everything

import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const currentUser = useSelector(state => state.currentUser)


  return (
    <>{currentUser ? (
        <>
        <span>PROFILE</span>
        <div className="user-profile">
          <div className="user-name">{currentUser.username}</div>
          <div className="user-recipe">{currentUser.personalRecipes}</div>
          <div className="user-favourites">{currentUser.favourites}</div>
        </div>
        </>
    ): (
      <>
        <span>COME ON MAN YOU CANNOT HAVE A PROFILE WITHOUT LOGGING IN</span>
      </>

    )
      }
    </>
  )
}

export default Profile