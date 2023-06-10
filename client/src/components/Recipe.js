//display all recipe details template

import { useState, useEffect } from "react"
import services from "./Services"

function Recipe ({recipe}) {
  const [current, setCurrent] = useState(recipe)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

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
        console.log(res)
        setComments([...comments, ...res])
      })
    }
  }, [current])

  function postComment() {
    const newComment = {
      comment:comment,
      recipe: recipe._id
    }
    
    services.postComment(newComment).then((res) => {
      setComments([...comments, res])
      setComment('')
    })
  }

  if(current) {
    return (
      <>
        <div className="display-recipe-container">
          <div className="display-recipe-name">{recipe.name}</div>
          <div className="display-recipe-ingredients">
            <span className="display-ingredients-label">Ingredients:</span>
            <div className="display-ingredient-list">{recipe.ingredients.map(ing => <span>{ing}</span>)}</div>
          </div>
          <div className="display-instructions">
            <span className="display-instructions-label">Instructions:</span>
            <div>{recipe.instructions}</div>
          </div>
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