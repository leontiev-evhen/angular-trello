(function () {
    angular
        .module('app')
        .directive('closeEditing', closeEditing);

        function closeEditing () {
            var KEYS = {
                ESCAPE: 27
            };
            return {
                restrict: 'A',
                link: link,
                scope: {
                    isEditing: '='
                } 
            }

            function link (scope, element, attrs) {
                element.on('keyup', function (e) {
                    if (_.isEqual(e.keyCode, KEYS.ESCAPE)) {
                        scope.isEditing = false;
                        scope.$apply();
                    }
                });
            }
        }
})();