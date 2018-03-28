angular.module('alurapic').controller('NewFotoController', function ($scope, $routeParams, resourceFoto, saveFoto){
    
    $scope.foto = {};
    $scope.mensagem = '';
    
    // var resourceFoto = $resource('v1/fotos/:fotoId', null, {
    //     update: {
    //         method: "PUT"
    //     }
    // });

    //Carrega foto para editar
    if($routeParams.fotoId){
        //GET resource
        resourceFoto.get({fotoId : $routeParams.fotoId},
            //.then
            function(foto){
                $scope.foto = foto;
            },
            //.catch
            function(error){
                console.error(error);
                $scope.mensagem = 'Não foi possivel editar a foto!'
            });
        
        // //GET http
        // $http.get('v1/fotos/' + $routeParams.fotoId)
        //     .then(function(foto){
        //         $scope.foto = foto.data;
        //     })
        //     .catch(function(error){
        //         console.error(error);
        //         $scope.mensagem = 'Não foi possivel editar a foto!'
        //     });
    }

    //botão salvar na página new e edit
    $scope.enviar = function () {
        if ($scope.formulario.$valid) {
            //usando services
            saveFoto.save($scope.foto)
                .then(function(data){
                    $scope.mensagem = data.mensagem;
                    if(data.inclusao = true){
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    }
                })
                .catch(function(error){
                    $scope.mensagem = error.mensagem;
                });
            //if ($routeParams.fotoId) {
                // //PUT resource
                // resourceFoto.update({fotoId : $scope.foto._id}, $scope.foto,
                //     //.then
                //     function(){
                //         $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                //         $scope.foto = {};
                //         $scope.formulario.$setPristine();
                //     },
                //     //.catch
                //     function(error){
                //         $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo + '!';
                //         console.error(error);
                //     });
                
                // //PUT http
                // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                //     .then(function(){
                //         $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                //         $scope.foto = {};
                //         $scope.formulario.$setPristine();
                //     })
                //     .catch(function(error){
                //         $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo + '!';
                //         console.error(error);
                //     });
            // } else{
                //usando services
               


                // //POST resource
                // resourceFoto.save({fotoId : $scope.foto._id}, $scope.foto,
                //     //.then
                //     function(){
                //         $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' incluida com sucesso!';
                //         $scope.foto = {};
                //         $scope.formulario.$setPristine();
                //     },
                //     //.catch
                //     function(){
                //         $scope.mensagem = 'Não foi possivel incluir a foto!';
                //         console.error(error);
                //     });
                
                // //POST http
                // $http.post('v1/fotos', $scope.foto)
                //     .then(function () {
                //         $scope.mensagem = 'Foto ' + $scope.foto.titulo +' incluida com sucesso!';
                //         $scope.foto = {};
                //         $scope.formulario.$setPristine();
                //     })
                //     .catch(function (error) {
                //         $scope.mensagem = 'Não foi possivel incluir a foto!';
                //         console.error(error);
                //     });
        }
    }
});