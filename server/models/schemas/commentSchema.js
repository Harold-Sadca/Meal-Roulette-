const mongoose = require('../index');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment:String,
  recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
  author: {
    type: String,
    default:'Anonymous'
  }
});

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;