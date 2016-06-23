var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Getting a pokemon');
  // res.send({name: "pikachu"});
  // var searchTerm = req.body.searchTerm;
  var randomId = Math.ceil(Math.random() * (811 - 1) + 1)
  var apiOptions = {
    url: 'http://pokeapi.co/api/v2/pokemon/' + randomId
  }
  request.get(apiOptions, function(error, response, body){
    if (error) {
      res.send('something went wrong');
    }
    else if (body) {
      res.send(body);
    }
  });
});

module.exports = router;
