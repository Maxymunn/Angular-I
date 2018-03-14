angular.module('alurapic').controller('FotosController', function($scope, $http ) {
    $scope.foto = [];
    $scope.filtro = "";

    //Deprecated method
    // $http.get('v1/fotos')
    // .success(function(fotos) {
    //     $scope.fotos = fotos;
    // })
    // .error(function(erro){
    //     console.log(erro);
    // });

    var promise = $http.get('v1/fotos');
    promise.then(function(returned){
        $scope.fotos = returned.data;
    }).catch(function(error) {
        console.log(error);
    })
});