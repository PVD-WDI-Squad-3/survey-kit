const controller = require('lib/wiring/controller')

/*const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/survey-kit-back-end-development')
const db = mongoose.connection*/
const models = require('app/models')
const Survey = models.survey
//const User = models.user

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')
//const nanoid = require('nanoid')
//const format = require('nanoid/format')

/* const done = function () {
  db.close()
} */

const create = (req, res, next) => {
  //let id = nanoid()
  const survey = Object.assign(req.body.survey, {
    //url: 'https://',
    _owner: req.user._id
  })
  Survey.create(survey)
    .then(survey =>
      res.status(201)
        .json({
          survey: survey.toJSON({ virtuals: true, user: req.user
          })
        }))
    .catch(next)
}

const index = (req, res, next) => {
  Survey.find()
    .then(surveys => res.json({
      surveys: surveys.map((survey) =>
        survey.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    survey: req.survey.toJSON({ virtuals: true, user: req.user })
  })
}

const destroy = (req, res, next) => {
  req.survey.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

const update = (req, res, next) => {
  console.log(req.body)
  delete req.body._owner  // disallow owner reassignment.
  req.survey.update(req.body.survey)
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  create,
  index,
  show,
  destroy,
  update
}, {
  before: [
    { method: setUser, only: ['index', 'show'] },
    { method: authenticate, except: ['index', 'show', 'update'] },
    { method: setModel(Survey), only: ['show'] },
    { method: setModel(Survey, { forUser: true }), only: ['update', 'destroy'] }
  ]
})
