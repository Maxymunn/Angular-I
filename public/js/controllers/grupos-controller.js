angular.module('alurapic').controller('GruposController', function($scope, $http){
    $scope.grupos = [];

    $http.get('v1/grupos')
        .then(function(grupo) {
            $scope.grupos = grupo.data;            
        })
        .catch(function(error){
            console.error(error);
        });
});