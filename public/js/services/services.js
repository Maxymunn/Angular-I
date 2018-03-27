angular.module('services', ['ngResource'])
    .factory('resourceFoto', function($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            update: {
                method: "PUT"
            }
        }); 
    })
    .factory('saveFoto', function(resourceFoto, $q){

        var service = {};

        service.save = function(promise){
            return $q(function(resolve, reject){
                
            })
        };
        return service;
    });