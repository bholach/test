const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema,'user');

var data = User.find(function(err,data){
  if(err){ console.log('no data error');}
  else{ 
    console.log('followings are users !');
    data.forEach(data => {
      console.log(data.name);
    });
    }
});

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username};
  User.findOne(query, callback);
}

//finding email
module.exports.getUserByEmail = function(email,callback){
  const query = {email: email};
  User.findOne(query,callback);
}

//adding user to database
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) console.log("ye wala"+err);
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.updatePass = function(username,newpass, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newpass, salt, (err, hash) => {
      if(err) console.log(err);
     var myquery = { username: username };
     var newvalues ={ $set: { password: hash }};
       User.updateOne(myquery, newvalues, callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}