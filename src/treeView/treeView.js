(function(golbal, angular, undefined) {
    angular.module("green.common.components.treeView", [])
        .directive('treeView', [function() {

            return {
                restrict: 'E',
                templateUrl: './treeView.html',
                scope: {
                    treeData: '=',
                    canChecked: '=',
                    textField: '@',
                    itemClicked: '&',
                    itemCheckedChanged: '&'
                },
                controller: ['$scope', function($scope) {
                    $scope.itemExpended = function(item, $event) {
                        item.$$isExpend = !item.$$isExpend;
                        $event.stopPropagation();
                    };

                    $scope.isLeaf = function(item) {
                        return !item.children || !item.children.length;
                    };

                    $scope.warpCallback = function(callback, item, $event) {
                        ($scope[callback] || angular.noop)({
                            $item: item,
                            $event: $event
                        });
                    };
                }]
            };
        }]);
})(this, angular);
