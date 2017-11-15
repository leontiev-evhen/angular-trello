(function() {
    angular
        .module('app')
        .factory('cardFactory', cardFactory);

        function cardFactory () {
            var service = {
                getCard: getCard,
                createCard: createCard,
                removeCard: removeCard,
                updateCard: updateCard
            };

            var cards = [
                {
                    id: 1,
                    description: 'Angular JS',
                    list_id: 1
                },
                {
                    id: 2,
                    description: 'Ember JS',
                    list_id: 1
                },
                {
                    id: 3,
                    description: 'Vue JS',
                    list_id: 1
                },
            ];
            return service;

            function getCard (list) {
                return _.filter(cards, {list_id: list.id});
            }

            function createCard (list, cardDescription) {
                cards.push({
                    id: _.uniqueId('card_'),
                    description: cardDescription,
                    list_id: list.id
                });
            }

            function removeCard (card) {
                _.pull(cards, card);
            }

            function updateCard (updatingCard) {
                var card = _.findWhere(cards, {id: updatingCard.id})
                card.description = updatingCard.description;
                card.list_id = updatingCard.list_id;
            }
        }
})();