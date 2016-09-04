var express = require('express');
var router = express.Router();
var res=null;
/* GET users listing. */
router.get('/calc/:operator/:num1/:num2', function(req, res) {
  var num1=parseFloat(req.params.num1);
  var num2=parseFloat(req.params.num2);
  if(req.params.operator=="add"){
res.send(num1+num2);
  }
  if(req.params.operator=="mul"){
res.send(num1*num2);
  }
  if(req.params.operator=="sub"){
res.send(num1-num2);
  }
  if(req.params.operator=="div"){
res.send(num1/num2);
  }
});

module.exports = router;
