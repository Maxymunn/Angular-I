angular.module('MyDirectives', []).directive('animalPanel', function(){
    var DDO = {};

    DDO.restric = "AE";

    DDO.scope = {
        titulo: '@'
    };

    DDO.transclude = true;

    DDO.templateUrl = 'js/directives/animalPanel.html';

    return DDO;
})