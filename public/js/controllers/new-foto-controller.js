angular.module('alurapic').controller('NewFotoController', function($scope, $http, $routeParams){
    
    $scope.foto = {};
    $scope.grupo = {}
    $scope.mensagem = '';
    
    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .then(function(foto){
                $scope.foto = foto.data;
            })
            .catch(function(error){
                console.error(error);
                $scope.mensagem = 'Não foi possivel editar a foto!'
            });
    }

    //botão salvar na página new e edit
    $scope.enviar = function () {
        if ($scope.formulario.$valid) {
            if ($routeParams.fotoId) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                    .then(function(){
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    })
                    .catch(function(error){
                        $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo + '!';
                        console.error(error);
                    })
            }else{
                /* var promise =  */
                $http.post('v1/fotos', $scope.foto)
                    .then(function () {
                        $scope.mensagem = 'Foto ' + $scope.foto.titulo +' incluida com sucesso!';
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    })
                    .catch(function (error) {
                        $scope.mensagem = 'Não foi possivel incluir a foto!';
                        console.error(error);
                    });
            }
        }
    }
});