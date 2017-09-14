'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    question: {
      type: String,
      required: true
    },
    answer: [{
      type: String,
      required: true
    }],
    response: [{
      type: String
    }]
  },
  completed: Boolean,
  url: String,
  owner: [{ type: Schema.Types.ObjectId, ref: 'user' }]
},
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })
/* surveySchema.virtual('generateRandomUrl').get(function () {
  somefunction
}) */
surveySchema.methods.getResponses = function (response) {
  return this.model('Survey').find({completed: true}, response)
}
const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
