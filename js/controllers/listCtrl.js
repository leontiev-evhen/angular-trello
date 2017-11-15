(function() {
angular
    .module('app')
    .controller('listCtrl', listCtrl);

    listCtrl.$inject = ['listFactory', 'cardFactory'];

    function listCtrl (listFactory, cardFactory) {
        var vm = this;
        vm.removeList = function (list) {
            listFactory.removeList(list);
        };

        vm.getCard = function (list) {
            return cardFactory.getCard(list);
        };

        vm.createCard = function (list) {
            cardFactory.createCard(list, vm.cardDescription);
            vm.cardDescription = '';
        };
    }
})();