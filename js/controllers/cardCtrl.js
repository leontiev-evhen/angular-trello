(function () {
    angular
        .module('app')
        .controller('cardCtrl', cardCtrl);

        cardCtrl.$inject = ['cardFactory'];

        function cardCtrl (cardFactory) {
            var vm = this;
            vm.isEditing = false;
            vm.editingCard = null;

            vm.removeCard = function (card) {
                cardFactory.removeCard(card);
            }

            vm.editCard = function (card) {
                vm.isEditing = true;
                vm.editingCard = angular.copy(card);
            }

            vm.updateCard = function () {
                cardFactory.updateCard(vm.editingCard);
                vm.isEditing = false;
                vm.editingCard = null;
            }
        }
})();