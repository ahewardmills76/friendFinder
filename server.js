var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('/app/public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);




app.listen(3000, function(){
    console.log('Listening on port 3000');
});
