/**
 * Created by Mikhail on 4/16/2017.
 */
'use strict';
function todoListController($scope, sessionStorage, localStorage, heroService) {
    var self = this;
    self.todos = [
        { action: "Get groceries", complete: false },
        { action: "Call plumber", complete: false },
        { action: "Buy running shoes", complete: true },
        { action: "Buy flowers", complete: false },
        { action: "Call family", complete: false }];
}

todoListController.$inject = ['$scope', 'sessionStorage','localStorage','heroService'];

angular.module('forms')
    .component('todoList', {
        templateUrl: 'views/todo-list.template.html',
        controller: todoListController
    });
