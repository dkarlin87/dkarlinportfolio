
    var soolApp = angular.module('soolApp', ['ngRoute']);

    soolApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/projects', {
                templateUrl : 'pages/projects.html',
                controller  : 'projectsController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    soolApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    soolApp.controller('projectsController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    soolApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
