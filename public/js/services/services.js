angular.module('services', ['ngResource'])
    .factory('resourceFoto', function($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            update: {
                method: "PUT"
            }
        }); 
    })
    .factory('saveFoto', function(resourceFoto, $q, $rootScope){

        var service = {};

        service.save = function(foto){
            return $q(function(resolve, reject){
                if (foto._id) {
                    resourceFoto.update({ fotoId: foto._id }, foto,
                        //.then
                        function(){
                            resolve({
                                mensagem : 'A foto ' + foto.titulo + ' foi alterada com sucesso!',
                                inclusao : false,
                            })
                        },
                        //.catch
                        function(error){
                            console.error(error);
                            reject({
                                mensagem : 'Não foi possível alterar a foto ' + foto.titulo + '!'
                            })
                        });
                } else {
                    resourceFoto.save(foto,
                        //.then
                        function() {
                            $rootScope.$broadcast('saveFoto');
                            resolve({
                                mensagem : 'Foto ' + foto.titulo + ' incluida com sucesso!',
                                inclusao : true,
                            })
                        },
                        //.catch
                        function(error){
                            $rootScope.$broadcast('saveFoto');
                            console.error(error);
                            reject({
                                mensagem : 'Não foi possivel incluir a foto!'
                            })
                        });
                }
            })
        };
        return service;
    });