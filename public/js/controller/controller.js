(function() {
  const FormController = function(TaskService, $route) {
    const vm = this;
    // Start the form off empty on page load.
    vm.formItem = [];
    vm.editId = 0;
    vm.placeHolder = "";
    // Load the cart data on page load.
    loadList();

    // Function on scope called when form is submitted.
    vm.addItem = function(item) {
      vm.itemObj = { task: item };
      TaskService.addItem(vm.itemObj).then($route.reload());
    };

    // Function on scope called when clicking Delete for an item.
    vm.deleteItem = function(item) {
      console.log(item.id);
      TaskService.deleteItem(item.id).then(loadList);
    };

    vm.editItem = function(item) {
      console.log("editItem id ", item);
      $("#editField").css("visibility", "visible");
      editId = item;
      console.log(vm.placeHolder);
      vm.placeHolder = item.task;
      console.log(vm.placeHolder);
    };
    vm.confirmEdit = function(item) {
      console.log("editId ", editId);
      editId.task = item;
      vm.itemObj = { task: item };
      TaskService.editItem(editId.id, vm.itemObj).then(loadList);
      $("#editField").css("visibility", "hidden");
      vm.edit = "";
      vm.placeHolder = "";
    };

    function loadList() {
      TaskService.getAllItems().then(items => {
        vm.formItem = items;
      });
    }
  };

  angular.module("app").controller("FormController", FormController);
})();
