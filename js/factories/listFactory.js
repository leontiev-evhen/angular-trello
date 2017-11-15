(function () {
  angular
    .module('app')
    .factory('listFactory', listFactory);
    
    function listFactory () {
      var service = {
        getLists: getLists,
        addList: addList,
        removeList: removeList
      };
      var lists = [
        {
          id: 1,
          listName: 'Monday'
        },
        {
          id: 2,
          listName: 'Tuesday'
        },
        {
          id: 3,
          listName: 'Wednesday'
        },
        {
          id: 4,
          listName: 'Thursday'
        },
        {
          id: 5,
          listName: 'Friday'
        },
      ];
      return service;

      function getLists () {
        return lists;
      }

      function addList (listName) {
        lists.push({
          id: _.uniqueId('list_'),
          listName: listName
        });
      }

      function removeList (list) {
        _.pull(lists, list);
      }
  }
})();