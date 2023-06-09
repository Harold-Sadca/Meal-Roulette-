//TODO:everything

function Profile({user}) {


  return (
    <>
      <span>PROFILE</span>
      {user && 
        <div className="user-profile">
          <div className="user-name">{user.username}</div>
          <div className="user-recipe">{user.personalRecipes}</div>
          <div className="user-favourites">{user.favourites}</div>
        </div>
      }
    </>
  )
}

export default Profile