const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    port: 3000,
    db: 'mongodb://localhost:27017/mean_todos'
  },
  production: {
    port: process.env.port,
    db: ''
  }
}
