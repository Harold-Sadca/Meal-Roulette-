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

// commentSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// })

const Comment = mongoose.model('Comment', commentSchema)



module.exports = Comment;