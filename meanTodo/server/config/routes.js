let controllers = require('../controllers')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/todos', controllers.todos.getAllTodos)
  app.get('/todos/:id', controllers.todos.getTodoById)
  app.post('/todo', controllers.todos.saveTodo)
  app.put('/todo/:id', controllers.todos.updateTodo)
  app.delete('/todo/:id', controllers.todos.deleteTodo)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}
