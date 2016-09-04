var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var email=new Schema({
  from:String,
  subject:String,
  body:String,
  date:String
});
module.exports=mongoose.model('emails',email);
