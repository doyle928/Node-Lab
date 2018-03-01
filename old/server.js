var http = require("http");
var tasks = require("./tasks.js");
http.createServer(function (request, response) {
    function randNum() {
        return Math.floor(Math.random() * 3);
    }
    response.writeHead(200, {
        "Content-type": "application/json"
    });
    response.write(tasks[randNum()]);
    response.end();
}).listen(3000);