let mongoose = require('mongoose')

let requiredValidationMessage = '{PATH} is required'

let todoSchema = mongoose.Schema({
  isCompleted: { type: Boolean, required: requiredValidationMessage },
  text: { type: String, required: requiredValidationMessage }
})

module.exports = mongoose.model('Todo', todoSchema, 'todos')
