angular.module('alurapic', ['MyDirectives', 'ngAnimate', 'ngRoute', 'services'])
    .config(function ($routeProvider, $locationProvider) {
        
        //activate html5 mode to take out # from URL
        $locationProvider.html5Mode(true);

        //actives routes
        $routeProvider
        .when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        })
        .when('/fotos/new',{
            templateUrl: 'partials/createFoto.html',
            controller: 'NewFotoController'
        })
        .when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/createFoto.html',
            controller: 'NewFotoController'
        })
        //redirect if any of above routes are reached
        .otherwise({
            redirectTo: '/fotos'
        })
    });