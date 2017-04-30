/**
 * Created by Mikhail on 4/15/2017.
 */
angular.module('hero.services')
    .factory('heroService',['$http', '$q', 'dataUrls', function($http, $q, dataUrl){

        function getData(url){
            var deferred = $q.defer();
            var promise = $http.get(url);
            promise.then(function(dt) {
                console.log("Heroes: " + dt.data);
                deferred.resolve(dt.data);
            });
            promise.catch(function(response) {
                console.log("The request failed with response " + response + " and status code " + response.status);
                deferred.reject(response);
            });
            return deferred.promise;
        }

        function getTopHeroes(){
            return getData(dataUrl.heroUrl);
        }
        function getHeroes(){
            return getData(dataUrl.heroUrl);
        }

        return {
            getHeroes: getHeroes,
            getTopHeroes: getTopHeroes
        }
    }]);
