// Angular routes- Angular will inject template file into <div ng-view></div>
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that uses NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        // geeks page that uses GeekController
        .when('/geeks', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        });
    $locationProvider.html5Mode(true);
}]);