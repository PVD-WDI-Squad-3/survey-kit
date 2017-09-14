const controller = require('lib/wiring/controller')
const models = require('app/models')
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')
