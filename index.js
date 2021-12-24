var express = require("express");

var app = express();
 
app.set('view engine','ejs');

app.set('views', './views')


var addRecords=require("./database");
app.use('/submitForm',addRecords);


var server = app.listen(8083, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

