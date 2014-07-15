'use strict';

require([
        'angular',
        'app',
        'domReady',
        'controllers/product-controller',
        'bootstrap'
],
    function (angular, app, domReady) {
        var root = require.toUrl('.').split('.')[0];
        app.config([
            '$routeProvider', '$httpProvider', '$sceDelegateProvider', '$locationProvider',
            function ($routeProvider, $httpProvider, $sceDelegateProvider, $locationProvider) {
                // sec
                $sceDelegateProvider.resourceUrlWhitelist(['self', '.*']);

                // route
                $routeProvider.
                when('/', {
                    templateUrl: '/public/js/views/Product/partials/product-index.html',
                    controller: 'ProjectIndexCtrl',
                    resolve: {}
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        ]).run([
            '$rootScope',
            function ($rootScope) {
                // global variable

                $rootScope.$safeApply = function ($scope, fn) {
                    $scope = $scope || $rootScope;
                    fn = fn || function () { };
                    if ($scope.$$phase) {
                        fn();
                    } else {
                        $scope.$apply(fn);
                    }
                };
            }
        ]).constant('$', $);

        domReady(function () {
            angular.bootstrap(document.body, ['myAngularApp']);

            $('html').addClass('ng-app: myAngularApp');
        });
    }
);