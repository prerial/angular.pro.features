'use strict';

// Declare app level module which depends on views, and components
angular.module('common', []);
angular.module('hero.services', []);
angular.module('heroesList', []);
angular.module('heroDetail', []);
angular.module('dashboard', []);
angular.module('forms', []);
angular.module('myApp', [
        'angular-storage',
        'ngRoute',
        'common',
        'hero.services',
        'heroesList',
        'heroDetail',
        'dashboard',
        'forms',
        'myApp.version'
])
.constant('dataUrls',{'heroUrl': '/data/heroes.js'})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
      .when('/heroes', {
        template: '<heroes-list></heroes-list>'
      })
      .when('/heroes/:id', {
        template: '<hero-detail></hero-detail>'
      })
      .when('/dashboard', {
          template: '<dashboard></dashboard>'
      })
      .when('/forms', {
          template: '<todo-list></todo-list>'
      })
      .when('/validation', {
          template: '<form-validation></form-validation>'
      })
      .otherwise({redirectTo: '/dashboard'});
}]);
