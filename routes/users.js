var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {  
    username: 'Will Elliott',
    email: 'will@will.com',
    phonenumber: '404-444-4434'
  })
});



module.exports = router;
