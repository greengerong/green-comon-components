(function(golbal, angular, undefined) {
    angular.module("green.common.components.title", [])
        .run(["$window", "$document", "$rootScope", "$location", "$injector", function($window, $document, $rootScope, $location, $injector) {
            $rootScope.$on('$routeChangeSuccess', function(event, current) {
                if (current && (current.$$route || current).redirectTo) {
                    return;
                }

                var title = getPageTitle(current);
                $window.title = title;
                $document.title = title;
            });

            function getPageTitle(current) {
                var title = current.$$route.title;

                if (!title) {
                    return $window.title;
                }

                return angular.isString(title) ? title : $injector.invoke(title);
            }
        }]);

})(this, angular);
