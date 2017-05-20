let express = require('express')
let bodyParser = require('body-parser')

module.exports = (config, app) => {
  app.set('views', config.rootPath + 'server/views')
  app.set('view engine', 'ejs')
  app.engine('html', require('ejs').renderFile)

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(express.static(config.rootPath + 'client'))
  app.use(express.static(config.rootPath + 'client/src'))
}
