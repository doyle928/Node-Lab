var tasks = ["Do the dishes", "Go to the gym", "Clean house"];

function randNum() {
    return Math.floor(Math.random() * 2);
}
var task = tasks[randNum()];


module.exports = tasks;