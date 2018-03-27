angular.module('alurapic').controller('FotosController', function($scope, resourceFoto) {
    
    $scope.foto = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    // var resourceFoto = $resource('v1/fotos/:fotoId');

    //$resource GET
    resourceFoto.query(
        //.then .success
        function(fotos){
            $scope.fotos = fotos; 
        }, 
        //.catch .error
        function(error) {
            console.error(error);
        });

    // //$http GET
    // $http.get('v1/fotos')
    // .then(function(returned){
    //     $scope.fotos = returned.data;
    // })
    // .catch(function(error) {
    //     console.error(error);
    // });
    
    //Deprecated method
    // $http.get('v1/fotos')
    // .success(function(fotos) {
    //     $scope.fotos = fotos;
    // })
    // .error(function(erro){
    //     console.error(erro);
    // });

    $scope.remove = function(foto) {
        //$resource DELETE
        resourceFoto.delete({fotoId : foto._id},
            //.then .success
            function() {
                var i = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(i, 1);
                $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso";
            },
            //.catch .error
            function(error){
                $scope.mensagem = "Problemas ao remover a foto " + foto.titulo + "!";
                console.error(error);
            });

        // //$http DELETE
        // $http.delete('v1/fotos/' + foto._id)
        //     .then(function() {
        //         var i = $scope.fotos.indexOf(foto);
        //         $scope.fotos.splice(i, 1);
        //         $scope.mensagem = "Foto " + foto.titulo + " foi removida com sucesso";
        //     })
        //     .catch(function(error){
        //         $scope.mensagem = "Problemas ao remover a foto " + foto.titulo + "!";
        //         console.error(error);
        //     });
    };
});