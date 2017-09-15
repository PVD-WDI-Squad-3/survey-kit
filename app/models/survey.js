'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*const answerSchema = new mongoose.Schema({
  type: String,
  /*selected: {
    type: Number,
    default: 0
  }
})*/

const questionSchema = new mongoose.Schema({
  content: {
    question: String,
    answers: [String]
  }
})

/*const responseSchema = new mongoose.Schema({
  response: [{
    question: String,
    answer: String
  }]
})*/

const surveySchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],

  /*responses: [{
      question: String,
      answer: String
    }],*/
    /* response: [{
      type: String
    }]
  }, */
  /* completed: {
      type: Boolean,
      default: false
    }, */
  // url: String,
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: {
      virtuals: true
      /*transform: function (doc, ret, options) {
        const userId = (options.user && options.user._id) || false
        ret.editable = userId && userId.equals(doc._owner)
        return ret*/
     }
   }
)
/* surveySchema.virtual('generateRandomUrl').get(function () {
  somefunction
}) */
/*surveySchema.methods.getResponses = function (response) {
  return this.model('Survey').find({completed: true}, response)
}*/
const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
