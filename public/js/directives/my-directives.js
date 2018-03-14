angular.module('MyDirectives', [])
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