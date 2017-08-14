var express = require('express');
var router = express.Router();

const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query(`
        select * from cd.members where memid !=0;
    `).then((result) => {
        console.log(result);
        res.render('member', { 
            members: result
        });
   });
});

module.exports = router;