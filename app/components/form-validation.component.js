/**
 * Created by Mikhail on 4/16/2017.
 */
'use strict';
function formValidationController($scope/*, sessionStorage, localStorage, heroService*/) {
    var self = this;
    this.todos = [
        { action: "Get groceries", complete: false },
        { action: "Call plumber", complete: false },
        { action: "Buy running shoes", complete: true },
        { action: "Buy flowers", complete: false },
        { action: "Call family", complete: false }];

    this.addNewItem = function (newItem) {
        if (angular.isDefined(newItem) && angular.isDefined(newItem.action)
            && angular.isDefined(newItem.location)) {

            self.todos.push({
                action: newItem.action + " (" + newItem.location + ")",
                complete: false
            });

        }
    };
    this.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "JS: Please enter a value";
            } else if (error.email) {
                return "Please enter a valid email address";
            }
        }
    }
}

formValidationController.$inject = ['$scope', 'sessionStorage','localStorage','heroService'];

angular.module('forms')
    .component('formValidation', {
        templateUrl: 'views/form-validation.template.html',
        controller: formValidationController
    });
