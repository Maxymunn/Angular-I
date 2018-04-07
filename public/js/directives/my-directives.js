angular.module('MyDirectives', ['services'])
    .directive('animalPanel', function(){
        var DDO = {};

        DDO.restric = "AE";

        DDO.scope = {
            titulo: '@'
        };

        DDO.transclude = true;

        DDO.templateUrl = 'js/directives/animalPanel.html';

        return DDO;
    })
    .directive('animalFoto', function(){
        var DDO = {};

        DDO.restric = 'AE';

        DDO.scope = {
            titulo: '@',
            url: '@'
        };

        // DDO.templateUrl = 'js/directive/animalFoto.html';
        DDO.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return DDO;
    })
    .directive('botaoDanger', function(){
        var DDO = {};

        DDO.restric = 'E';

        DDO.scope = {
            name: '@',
            action: '&'
        };

        DDO.template = '<button ng-click="action(foto)" class="btn-danger btn btn-block">{{name}}</button>';

        return DDO;
    })
    .directive('afterFocus', function(){
        var DDO = {};

        DDO.restric = 'A';

        // //watch
        // DDO.scope = {
        //     focus: '='
        // };

        DDO.link = function(scope, element) {
            //watch gasta muito processamento
            // scope.$watch('focus', function(){
            //     if (scope.focus) {
            //         element[0].focus();    
            //     }
            // });
            scope.$on('saveFoto', function() {
                element[0].focus();    
            });
        }

        return DDO;
    })
    .directive('titles', function () {
        var ddo = {};
        ddo.restrict = 'E';
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        
        ddo.controller = function ($scope, resourceFoto) {
            resourceFoto.query(function(fotos){
                $scope.titulos = fotos.map(function(foto){
                    return foto.titulo;
                });
            });
        };

        return ddo;
    })
;