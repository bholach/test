const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../../config/database');
const User = require('../../models/user');
user:Object;
// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  console.log(newUser.name);
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.getUserByEmail(email, (err, user) => {
    if(err)   return res.json({success: false, msg: 'Some Error Occured !'});
    if(!user){
      return res.json({success: false, msg: 'Email or Password is Wrong'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err)  return res.json({success: false, msg: 'Some Error Occured !'});
      if(isMatch){
        const token = jwt.sign (user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong username or password'});
      }
    });
  });
});
// Change Password
router.post('/changepass', (req, res, next) => {
  let oldpass = req.body.oldpass ;
  let newpass = req.body.newpass 
  let username = req.body.username;
 
  User.getUserByUsername(username, (err, user) => {
    if(err)   return res.json({success: false, msg: 'Some Error Occured !'});
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }
    User.comparePassword(oldpass, user.password, (err, isMatch) => {
      if(err)  
        return res.json({success: false, msg: 'Some Error Occured !'});
         if(isMatch){
            User.updatePass(user.username,newpass, (err,user) => {
            if(err){
               res.json({success: false, msg:'Failed to update password'});
          } else {
               res.json({success: true, msg:'Password Changed '});
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password !'});
      }
    });
  });
  });

  //password reset route
  router.post('/resetpass',(req,res,next) =>{
    User.getUserEmail(req.body.email,(err,user)=>{
      if(err)   return res.json({success: false, msg: 'Some Error Occured !'});
      else{
        if(user){
          return res.json({success: true, msg: 'hai !'});
        }
        else{
          return res.json({success: false, msg: 'nahi hai!'});
        }
      }
    });
  });
// Profile
router.get('/profile', (req, res, next) => {
  res.json({user:req.user});
});

router.post('/:id'),(req,res,next)=>{
  res.json({})
}
//email verify
router.get('/everifykey:everifykey?', (req, res, next) => {
//res.send(req.params.everifykey);
 //res.json({user:req.user});
 res.redirect('http://localhost:4200/login');

});

module.exports = router;