/**
 * Created by Mikhail on 4/16/2017.
 */
'use strict';
function HeroeDetailController($window, $routeParams, $location, heroService) {

    var self = this;
    self.selectedHero = null;
    self.hero = null;
    heroService.getHeroes().then(function(dt){
        var arr  = dt.filter(function(item){
            return item.id+'' === $routeParams.id;
        });
        self.hero = arr[0];
    });
    self.goBack = function goBack(){
        $window.history.back();
    }
}

HeroeDetailController.$inject = ['$window', '$routeParams', '$location', 'heroService'];

angular.module('heroDetail')
    .component('heroDetail', {
        templateUrl: 'views/hero-detail.template.html',
        controller: HeroeDetailController
    });
