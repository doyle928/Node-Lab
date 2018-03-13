(function() {
  function TaskService($http) {
    this.getAllItems = getAllItems;
    this.addItem = addItem;
    this.deleteItem = deleteItem;
    this.editItem = editItem;

    function getAllItems() {
      console.log("getAllITems triggered initiated");
      return $http({
        method: "GET",
        url: "/todolist"
      }).then(function(response) {
        console.log("getAllITems triggered by promise ", response.data);
        return response.data;
      });
    }

    function addItem(item) {
      console.log("service ", item);
      return $http({
        method: "POST",
        url: "/todolist",
        data: item
      });
    }

    function deleteItem(itemId) {
      // DELETE /api/items/{ID}
      return $http({
        method: "DELETE",
        url: "/todolist/" + itemId
      });
    }

    function editItem(itemId, item) {
      console.log(itemId, item);
      return $http({
        method: "PUT",
        url: "/todolist/" + itemId,
        data: item
      });
    }
  }

  angular.module("app").service("TaskService", TaskService);
})();

//   var savedTasks = [];
//   return {
//     setTask: setTask,
//     getTask: getTask
//   }

//   function setTask(taskItem) {
//     savedTasks.push(taskItem);
//   }

//   function getTask() {
//     return savedTasks;
//   }
// }
