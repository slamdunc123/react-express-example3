var express = require('express');
var router = express.Router();

// Get the local data.json file 
var data = require('../data.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource'); // this is a test using send() to display text

  // And insert something like this instead:
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);

  // Uses a local data.json file as declared at the top 
res.json(data)


});

module.exports = router;