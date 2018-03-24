angular.module('alurapic').controller('NewFotoController', function($scope, $http){
    
    $scope.foto = {};
    $scope.mensagem = '';

    $scope.enviar = function () {
        if ($scope.formulario.$valid) {
            /* var promise =  */
            $http.post('v1/fotos', $scope.foto)
            
            .then(function () {
                $scope.foto = {};
                $scope.mensagem = 'Foto incluida com sucesso!';
            }).catch(function (error) {
                $scope.mensagem = 'Não foi possivel incluir a foto!'
                console.log(error);
            })
        }
    }
});