const Comment = require('../schemas/commentSchema')

exports.findAll = async(req) => {
const _id = req.params.id
  try {
    const comments = await Comment.find({recipe:_id});
    return comments;
  } catch(e) {
    console.log('Man these error are no longer funny.', e.message);
  }
}

exports.createOne = async(req) => {
  const {comment, recipe} = req.body
  const author = req.user.username
  try{
    const newComment = await new Comment({comment, recipe, author});
    await newComment.save();
    return newComment;
  } catch(e) {
    console.log('Are you really this bad dude???', e.message);
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