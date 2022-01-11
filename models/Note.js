const { Schema, model } = require('mongoose')

const Notes = new Schema({
 body: {
  type: String,
  required: true
 },
 user: {
  type: Schema.Types.ObjectId,
  ref: 'user',
  required: true
 },
 posts: [{
  type: Schema.Types.ObjectId,
  ref: 'post',
  require: true
 }]
})

module.exports = model('note', Note)
