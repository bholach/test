const express = require('express');
const router = express.Router();
const config = require('../../../config/database');
const Category = require('../../models/categories');
Category:Object;
// Category 

router.post('/addcategory', (req, res, next) => {
  let newCategory = new Category ({
    category: req.body.category
  });
  Category.findOne({category:newCategory.category},(err,data)=>{
       if(data){
         res.json({success: false, msg:'Sorry! category already available'});
       }
       else{
        Category.addCategory(newCategory, (err, data) => {
          if(err){
            res.json({success: false, msg:'Failed to add Category'});
          } 
          else {
            res.json({success: true, msg:'Category added Successfully !'});
          }
        });
       }
  });

});
router.post('/addtopic', (req, res, next) => {

    let newCategory = new Category ({
      category: req.body.category,
      topics : req.body.topics
    });
    Category.findOne({category:newCategory.category},(err,data)=>{
          if(!data){
            res.json({success: false, msg:'Sorry! provide category is not available '});
          }
          else{
            let flag=false;
            let query ={
              category:newCategory.category
            }
            Category.find(query,{topics:1},(err,data)=>{
              if(data){
                data.forEach(dd=>{
                  for(let i=0 ; i<dd.topics.length;i++){
                    if(newCategory.topics[0].name == dd.topics[i].name)               
                        flag = true;
                  }               
                }); 
                if(flag){
                   flag=false;
                  res.json({success: false, msg:'Sorry! Topic already available '});   
                }           
              else{
                Category.addTopic(newCategory, (err, data) => {
                  if(err){
                    res.json({success: false, msg:'some error occured'});
                  } 
                  else if(data.nModified){
                    flag=false;
                    res.json({success: true, msg:'Topic added Successfully !'});        
                  }
                  else if(data.ok){
                    flag=false;
                    res.json({success: true, msg:'Topic added Successfully !'});
                  }
                  else {
                    res.json({success: false, msg:"some error occured"});
                  }
                });
              }
            }
          });
       }
    });
    
  });

router.get('/getcategories',(req,res,next) => {
    Category.find({},{category:1},function(err,datas){
      if(err){ return {success:false,msg:"some error ocuured !"};}
      else{ 
        //res.json(datas);
        var cat = [];
        datas.forEach(element => {
          cat.push(element.category)
        });
        JSON.stringify(cat);
        //let data = JSON.parse(cat);
        res.json({
          success:true,
          categories : cat
        });
      }
    });
  });
 
  router.post('/gettopics',(req,res,next) => {
    let newCategory = new Category ({
        category: req.body.category
      });
    Category.findOne({category:req.body.category},{topics:1},function(err,datas){
      if(err){ return {success:false,msg:"some error occured !"};}
      else{
        if(datas.topics.length)
        res.json({success:true,data:datas});
        else
        res.json({success:false,msg:"sorry! no topic available for this category"});
      }
    });
  });

module.exports = router;