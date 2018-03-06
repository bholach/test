const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

// Exam Schema
const ExamSchema = mongoose.Schema({
  examname: {
    type: String,
    required : true
  },
  questions : [{
    question:{type: String},
      options :[ {
        type: String,
        required: true
      },
      {
        type: String,
        required: true
      },
      {
        type: String,
        required: true
      },
      {
        type: String,
        required: true
      }],
    answer:  {type:String,required: true},
    category: {type:String,required: true}
  }]
});

const Exam = module.exports = mongoose.model('Exam', ExamSchema,'Exam');

module.exports.getExamById = function(id, callback){
    Exam.findById(id, callback);
}

module.exports.findExamQuestion = function(examName, callback){
  const query = {examname: examName.examname};
  Exam.findOne(query, callback);
}

//adding user to database
module.exports.addExam = function(newExam, callback){
         newExam.save(callback);
}

//adding Topics to Exam
module.exports.addQuestion = function(newQuestion, callback){
  var myquery = {examname: newQuestion.examname};
  var newvalues ={$push: {questions : newQuestion.questions}};
  Exam.updateOne(myquery, newvalues, callback);
  }


