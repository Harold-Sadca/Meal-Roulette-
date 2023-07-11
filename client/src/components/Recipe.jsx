//display all recipe details template

import { useState, useEffect } from "react"
import services from "./Services"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../css/recipe-display.css'

function Recipe ({recipe}) {
  const [current, setCurrent] = useState(recipe)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const currentUser = useSelector(state => state.currentUser)
  const authenticated = useSelector(state => state.authenticated)
  const navigate = useNavigate()

  if (recipe != current) {
    setCurrent(recipe)
  }

  function commentHandler(e) {
    setComment(e.target.value)
  }

  useEffect(() => {
    if(current){
      const id = current._id;
      services.getComments(id).then((res) => {
        setComments([...res])
      })
    }
  }, [current])

  function postComment() {
    const newComment = {
      comment:comment,
      recipe: recipe._id
    }
    if (newComment.comment) {
      services.postComment(newComment).then((res) => {
        setComments([...comments, res])
        setComment('')
      })
    }
  }

  function handleSave(e) {
    const id = e.target.id
    const {_id} = recipe
    services.saveFoodRecipe({_id}, id).then((res) => {
      console.log(res)
      currentUser[id].push(recipe)
      navigate(`/user-profile`)
      
    })
    
  }

  if(current) {
    return (
      <>
        <div key={recipe._id} className="display-recipe-container">
          <div className="name-author">
            <div className="display-recipe-name">{recipe.name}</div>
            <div className="author">By: {recipe.author.username}</div>
          </div>
          <div className="display-recipe-ingredients">
            <span className="display-ingredients-label">Ingredients:</span>
            <div className="display-ingredient-list">{recipe.ingredients.map((ing) => {
              return <a href={"https://www.google.com/search?q="+ing} target="blank" className="ingred">{ing}</a>
            })}</div>
          </div>
          <div className="display-instructions">
            <span className="display-instructions-label">Instructions:</span>
            <div>{recipe.instructions}</div>
          </div>
          {authenticated ? (
            <div className="add-meal-buttons">
              <button className="add-meal" id="breakfast" onClick={(e) => {handleSave(e)}}>Breakfast</button>
              <button className="add-meal" id="lunch" onClick={(e) => {handleSave(e)}}>Lunch</button>
              <button className="add-meal" id="dinner" onClick={(e) => {handleSave(e)}}>Dinner</button>
              <button className="add-meal" id="foodFavourites" onClick={(e) => {handleSave(e)}}>Favourite</button>
            </div>
          ) :<div>Login to start planning your meals.</div>
          }
        </div>
        <div className="comment-form-container">
          <textarea value={comment} onChange={(e) => {commentHandler(e)}} className="comment-input"></textarea>
          <button onClick={postComment} className="post-comment btn-submit">Post</button>
        </div>
        <div className="comments-list">
          {comments.length > 0 && comments.map((com) => {
            return <div className="comment-list-container">
              <p className="comment">{com.comment}</p>
              <span className="comment-author">{com.author}</span>
            </div>
          })}
        </div>
      </>
    )
  }
}

export default Recipe