(function(golbal, angular, undefined) {
    'use strict';
    angular.module("greenComponentsApp")
        .service('treeDataService', ['$q', function($q) {
            var self = this;

            self.getAll = function() {
                var data = [{
                    "id": "1",
                    "pid": "0",
                    "name": "家用电器",
                    "icon": "fa fa-book",
                    "children": [{
                        "id": "4",
                        "pid": "1",
                        "name": "大家电",
                        "icon": "fa fa-book",
                        "children": [{
                            "id": "7",
                            "pid": "4",
                            "name": "空调",
                            "icon": "fa fa-book",
                            "children": [{
                                "id": "15",
                                "pid": "7",
                                "icon": "fa fa-book",
                                "name": "海尔空调"
                            }, {
                                "id": "16",
                                "pid": "7",
                                "icon": "fa fa-book",
                                "name": "美的空调"
                            }]
                        }, {
                            "id": "8",
                            "pid": "4",
                            "icon": "fa fa-book",
                            "name": "冰箱"
                        }, {
                            "id": "9",
                            "pid": "4",
                            "icon": "fa fa-book",
                            "name": "洗衣机"
                        }, {
                            "id": "10",
                            "pid": "4",
                            "icon": "fa fa-book",
                            "name": "热水器"
                        }]
                    }, {
                        "id": "5",
                        "pid": "1",
                        "name": "生活电器",
                        "icon": "fa fa-book",
                        "children": [{
                            "id": "19",
                            "pid": "5",
                            "icon": "fa fa-book",
                            "name": "加湿器"
                        }, {
                            "id": "20",
                            "pid": "5",
                            "icon": "fa fa-book",
                            "name": "电熨斗"
                        }]
                    }]
                }, {
                    "id": "2",
                    "pid": "0",
                    "name": "服饰",
                    "icon": "fa fa-book",
                    "children": [{
                        "id": "13",
                        "pid": "2",
                        "icon": "fa fa-book",
                        "name": "男装"
                    }, {
                        "id": "14",
                        "pid": "2",
                        "icon": "fa fa-book",
                        "name": "女装"
                    }]
                }, {
                    "id": "3",
                    "pid": "0",
                    "name": "化妆",
                    "icon": "fa fa-female",
                    "children": [{
                        "id": "11",
                        "pid": "3",
                        "icon": "fa fa-female",
                        "name": "面部护理"
                    }, {
                        "id": "12",
                        "pid": "3",
                        "icon": "fa fa-female",
                        "name": "口腔护理"
                    }]
                }];

                return $q.when(data);
            };
        }])
        .controller('TreeViewCtrl', ['treeDataService', function(treeDataService) {
            var vm = this;
            treeDataService.getAll().then(function(data) {
                vm.tree = data;
            });

            vm.itemClicked = function($item) {
                vm.selectedItem = $item;
                console.log($item, 'item clicked');
            };

            vm.itemCheckedChanged = function($item) {
                $http.post('/url', $item);
                console.log($item, 'item checked');
            };

            return vm;
        }]);
})(this, angular);
