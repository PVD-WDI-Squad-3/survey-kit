const controller = require('lib/wiring/controller')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/survey-kit-back-end-development')
const db = mongoose.connection
const models = require('app/models')
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')
const randUrl  = require('gyfcat-style-urls')

const done = function () {
  db.close()
}

/*const create = (req, res, next) => {
  const survey = Object.assign(req.body.survey, {
    _owner: req.user._id
  })
  Survey.create(survey)
    .then(survey =>
      res.status(201)
        .json({
          survey: survey.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}*/

const create = function (title, content) {

  let rand = randUrl.generateCombination(3, "_")
  const surveyParams = {
    title: title,
    content: content,
    completed: false,
    url: rand
  }

  Survey.create(surveyParams)
    .then(function(survey) {
      console.log(survey)
    })
    .catch(function(error) {
      console.error(error)
    })
    .then(done)
}
