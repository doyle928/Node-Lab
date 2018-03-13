(function () {
    var taskList = {
        // bindings: {
        //     list: "<"
        // },
        templateUrl: "partials/list.partial.html",
        controller: "FormController"//function (TaskService) {
        //     var vm = this;
        //     vm.tasksToDisplay = TaskService.getTask();
        //     vm.ClickX = function(bar) {
        //         vm.tasksToDisplay.splice(bar, 1);
        //     }
        // }
    };


    angular.module("app")
        .component("taskList", taskList);

})();