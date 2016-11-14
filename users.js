(function(angualr){
    angular.module('DemoApp', ['ngRoute','adduser.app','show.app','revamp.app'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './adduser/view.html',
                    controller: 'adduserCtrl'
                })
                .when('/show', {
                    templateUrl: 'show/view.html',
                    controller: 'showCtrl'
                })
                .when('/revamp', {
                    templateUrl: 'revamp/view.html',
                    controller: 'revampCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                })

        }])
})(angular)