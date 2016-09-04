var express = require('express');
var router = express.Router();
var Emails=require('../models/email');

/* GET home page. */
router.get('/mail', function(req, res, next) {

Emails.find(function(err,data){
  if(err)
  {
    console.log(err);
  }
  else {
    res.json(data);
    console.log(data);
  }
});




  });
  //res.render('index', { title: 'Express' });

  //res.send({'name':'Peter'});
  // var jsonData=JSON.parse('{name:Hello}');
  // res.json(jsonData);
  // console.log("in get");





router.post('/', function(req, res, next) {
var email=new Emails(req.body);
email.save(function(err,data){
  if(err){
    console.log(err);
  }
  else{
  console.log("data saved");
  }
});
  console.log(req.body);

});
router.put('/update', function(req, res, next) {
console.log("inside put");
  res.send({message:"this is update"});


});
router.delete('/delete', function(req, res, next) {
  Emails.remove({
  _id: req.body.id
}, function(err, transaction) {
   if (err)
       res.send(err);
   res.json({ message: 'Transaction deleted!' })
});
console.log("inside del");


});

module.exports = router;
