/**
 * Created by Mikhail on 4/16/2017.
 */
'use strict';
function HeroesListController( $route, $routeParams, $location, heroService) {
    var self = this;
    self.selectedHero = null;
    heroService.getHeroes().then(function(dt){
        self.heroes = dt;
    });
    self.onSelect = function onSelect(hero) {
        self.selectedHero = hero;
    };
    self.add = function addHero(val){
        if(val && val !== ''){
            var hero = Object.create({
                name: val,
                id:  self.heroes[self.heroes.length-1].id + 1
            });
            self.heroes.push(hero);
        }
    };
    self.delete = function deleteHero(hero){

//        this.heroService.delete(hero.id)
//            .then(() => {
        self.heroes = self.heroes.filter(function(item){
                return    item.id !== hero.id;
            });
        if (self.selectedHero === hero) { self.selectedHero = null; }
//    });
    };
    self.gotoDetail = function gotoDetail(){
        var aaa = $route, bbb = $routeParams, ccc = $location;
        var ttt = self.selectedHero;
        $routeParams = self.selectedHero;
        $location.path("/heroes/"+self.selectedHero.id);
    }
}

HeroesListController.$inject = ['$route', '$routeParams', '$location', 'heroService'];

angular.module('heroesList')
    .component('heroesList', {
        templateUrl: 'views/heroes-list.template.html',
        controller: HeroesListController
    });
