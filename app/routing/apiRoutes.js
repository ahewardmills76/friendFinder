// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require('../api/friends');
var bodyParser = require('body-parser');





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get(friends, function(req, res) {
    return res.json(characters);
  });

  app.post("/addFriend", function (req, res) {
    console.log(req.body);
    friends.push(req.body);
    // compare friends  functions
    var scores = [] // sums to 100
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
      sum += scores[i]
    }
    // the result you are going to send it back 
    // with the command res.send()

    res.send("this is only a test");
    console.log(friends, 'this is friends');
  });


};