var express = require("express");
var inMemoryDatabase= require("./in-memory-database");
var router = express.Router();

var todoList = inMemoryDatabase();
todoList.init([]);

router.get("/list", function(req, res){
    res.send(todoList.readAll());
});
router.post("/list", function(req, res){
    var list = req.body;
    todoList.create(list);
    res.send(list);
});
router.put("/list/:id",function(req, res){
    var id = req.params.id;
    var item = req.body;
    console.log(item);
    todoList.update(id, item);
    res.send("Updated");
});
router.delete("/list/:id", function(req, res){
    var id = req.params.id;
    todoList.delete(id);
    res.send("Deleted");
});


module.exports = router;