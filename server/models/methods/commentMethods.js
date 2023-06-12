const Comment = require('../schemas/commentSchema')

exports.findAll = async(req) => {
const _id = req.params.id
  try {
    const comments = await Comment.find({recipe:_id});
    return comments;
  } catch(e) {
    console.log('Dude you screwed up while getting the comments dumbass.');
  }
}

exports.createOne = async(req) => {
  const {comment, recipe} = req.body
  const author = req.user.username
  // const {comment, recipe, author} = req.body use this after full authentication
  try{
    const newComment = await new Comment({comment, recipe, author});
    // const newRecipe = await new Recipe({comment, recipe, author}); use this after authorization is final
    await newComment.save();
    return newComment;
  } catch(e) {
    console.log('Dude you screwed up while posting a dumbass.');
  }
}


// exports.editOne = async(req) => {
//   const {_id} = req.body;
//   try{
//     const recipe = await Recipe.findOneAndUpdate({_id}, {...req.body});
//     return recipe
//   } catch(e) {
//     console.log('Dude you screwed up while updating a recipe dumbass.');
//   }
// }

// exports.deleteOne = async(req) => {
//   const {_id} = req.body;
//   try{
//     const res = await Recipe.deleteOne({_id})
//     return res;
//   } catch(e) {
//     console.log('Dude you screwed up while deleting a recipe dumbass.');
//   }
// }