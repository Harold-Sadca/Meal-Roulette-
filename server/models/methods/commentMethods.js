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
  // const {comment, recipe, author} = req.body use this after full authentication
  try{
    const newComment = await new Comment({comment, recipe});
    // const newRecipe = await new Recipe({comment, recipe, author}); use this after authorization is final
    await newComment.save();
    return newComment;
  } catch(e) {
    console.log('Dude you screwed up while posting a dumbass.');
  }
}

// module.exports.showCampground = async (req, res,) => {
//   const campground = await Campground.findById(req.params.id).populate({
//       path: 'reviews',
//       populate: {
//           path: 'author'
//       }
//   }).populate('author');
//   if (!campground) {
//       req.flash('error', 'Cannot find that campground!');
//       return res.redirect('/campgrounds');
//   }
//   res.render('campgrounds/show', { campground });
// }

// module.exports.index = async (req, res) => {
//   const campgrounds = await Campground.find({}).populate('popupText');
//   res.render('campgrounds/index', { campgrounds })
// }

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