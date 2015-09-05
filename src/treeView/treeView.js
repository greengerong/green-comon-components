(function(golbal, angular, undefined) {
    angular.module("green.common.components.treeView", [])
        .constant('treeViewConfig', {
            itemExpendIcon: 'fa fa-minus',
            itemCollapseIcon: 'fa fa-plus',
            itemLeafIcon: 'fa fa-leaf',
            itemTemplateUrl: '/treeItem.html'
        })
        .directive('treeView', ['treeViewConfig', function(treeViewConfig) {

            return {
                restrict: 'EA',
                templateUrl: '/treeView.html',
                scope: {
                    treeData: '=',
                    canChecked: '=',
                    textField: '@',
                    iconField: '@',
                    itemClicked: '&',
                    itemCheckedChanged: '&',
                    itemTemplateUrl: '@'
                },
                controller: ['$scope', function($scope) {
                    $scope.defaultItemTemplateUrl = treeViewConfig.itemTemplateUrl;
                    $scope.itemExpended = function(item, $event) {
                        item.$$isExpend = !item.$$isExpend;
                        $event.stopPropagation();
                    };

                    $scope.getItemIcon = function(item) {
                        var isLeaf = $scope.isLeaf(item);

                        if (isLeaf) {
                            return treeViewConfig.itemLeafIcon;
                        }

                        return item.$$isExpend ? treeViewConfig.itemExpendIcon : treeViewConfig.itemCollapseIcon;
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
