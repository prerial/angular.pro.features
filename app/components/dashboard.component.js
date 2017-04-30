/**
 * Created by Mikhail on 4/16/2017.
 */
'use strict';
function DashboardController(sessionStorage, localStorage, heroService) {
    var self = this;
    heroService.getTopHeroes().then(function(dt){
        self.heroes = dt.slice(0,4);
    });
}

DashboardController.$inject = ['sessionStorage','localStorage','heroService'];

angular.module('dashboard')
    .component('dashboard', {
        templateUrl: 'views/dashboard.template.html',
        controller: DashboardController
    });
