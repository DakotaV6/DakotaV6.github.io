"use strict";

angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/",{
                template: "<about></about>"
            })
            .when("/nav", {
                template: "<navigation></navigation>"
            })
            .when("/social", {
                template: "<social></social>"
            })
            .when("/work", {
                template: "<work></work>"
            });
    }]);