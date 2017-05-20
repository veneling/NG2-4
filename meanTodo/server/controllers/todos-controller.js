let Todo = require('../models/todo')

module.exports = {
  getAllTodos: function (req, res, next) {
    Todo
      .find(function (err, todos) {
        if (err) {
          res.send(err)
        } else {
          res.json(todos)
        }
      })
  },
  getTodoById: function (req, res, next) {
    Todo
      .findById((req.params.id), function (err, todo) {
        if (err) {
          res.send(err)
        } else {
          res.json(todo)
        }
      })
  },
  saveTodo: function (req, res, next) {
    let todo = req.body
    if (!todo.text || !(todo.isCompleted + '')) {
      res.status(400)
      res.json({'error': 'Invalid Data'})
    } else {
      Todo
        .create(todo, function (err, result) {
          if (err) {
            res.send(err)
          } else {
            res.json(result)
          }
        })
    }
  },
  updateTodo: function (req, res, next) {
    var todo = req.body
    var updObj = {}

    updObj.isCompleted = todo.isCompleted

    if (todo.text) {
      updObj.text = todo.text
    }

    if (!updObj) {
      res.status(400)
      res.json({'error': 'Invalid Data'})
    } else {
      Todo
        .update({ _id: req.params.id }, updObj, {}, function (err, result) {
          if (err) {
            res.send(err)
          } else {
            res.json(result)
          }
        })
    }
  },
  deleteTodo: function (req, res, next) {
    Todo
      .remove({ _id: req.params.id }, function (err, result) {
        if (err) {
          res.send(err)
        } else {
          console.log(result)
          res.json(result)
        }
      })
  }
}
