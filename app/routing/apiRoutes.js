// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsData = require('../data/friends');






// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    friendsData.push(req.body);
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