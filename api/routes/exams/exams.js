const express = require('express');
const router = express.Router();
const config = require('../../../config/database');
const Exam = require('../../models/exams');
Exam:Object;
// Exam 
const availCategory = ["aptitute","resoning","english","genral awareness"];

router.post('/addexam', (req, res, next) => {
  let newExam = new Exam ({
    examname: req.body.examname
  });
  Exam.findOne({},(err,data)=>{
    if(data)
    res.json({success:false,msg:"exam already exist"});
    else{
      Exam.addExam(newExam,(err, data) => {
        if(err){
          res.json({success: false, msg:'Failed to add Exam'});
        } 
        else {
          res.json({success: true, msg:'Exam added successfully !'});
        }
      });
    }
  });
 
});

router.post('/addquestion', (req, res, next) => {
    let newExam = new Exam ({
      examname: req.body.examname,
      questions : req.body.questions
    });
    Exam.addQuestion(newExam, (err, data) => {
      if(err){
        res.json({success: false, msg:'Failed to add Question'});
      } 
      else if(data.ok){
        res.json({success: true, msg:'Question was added Successfully !'});
      }
      else {
        res.json({success: true, msg:"failed to add question"});
      }
    });
  });

 router.get('/examnames',(req,res,next) => {
    Exam.find({},{examname:1},function(err,datas){
      if(err){ return {success:false,msg:"some error ocuured !"};}
      else{ 
        res.json({success:true,data:datas});
      }
    });
  });

  router.post('/getquestions',(req,res,next) => {
    let newExam = new Exam ({
        examname: req.body.examname
      });
    Exam.findExamQuestion(newExam,function(err,datas){
    
      if(err){ return {success:false,msg:"some error ocuured !"};}
      if(datas == null || datas.questions <= 0) {return {success:false,msg:"some error ocuured !"};}
      else{ 
        res.json({success:true,data:datas.questions});
      }
    });
  });


//getting number of question of particular category
router.post('/examquesstat',(req,res,next) => {

  let newExam = new Exam ({
    examname: req.body.examname
  });
  console.log(newExam.examname);
  Exam.findOne({examname:newExam.examname},{questions:1},function(err,datas){
    if(err){ return {success:false,msg:"some error ocuured !"};}
    if(!datas){ return {success:false,msg:"some error ocuured !"};}
    else{ 
      data = categoryCount(datas.questions);
      res.json({success:true,data:data});
    }
  });
});

function categoryCount(categories){
     let apticount=0,rescount=0,engcount=0,gencount=0;
      categories.forEach(cat=>{
        if(cat.category == availCategory[0]) apticount++;         
        else if(cat.category == availCategory[1]) rescount++;
        else if(cat.category == availCategory[2]) engcount++; 
        else if(cat.category == availCategory[3]) gencount++;    
      });

      return {
        aptitute:apticount,
        resoning:rescount,
        english:engcount,
        genral:gencount
      };
}
module.exports = router;