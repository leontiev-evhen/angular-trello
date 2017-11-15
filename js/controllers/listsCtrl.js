(function () {
  angular
    .module('app')
    .controller('listsCtrl', listsCtrl);

    listsCtrl.$inject = ['listFactory'];

    function listsCtrl (listFactory) {
      var vm = this;
      vm.lists = listFactory.getLists();

      vm.addList = function () {
        listFactory.addList(vm.listName);
        vm.listName = '';
      };
    } 

})();