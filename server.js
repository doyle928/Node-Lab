var express = require("express");
var bodyParser = require("body-parser");
var todoRoutes = require("./todo-routes");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", todoRoutes);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});