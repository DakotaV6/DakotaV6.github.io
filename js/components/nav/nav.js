"use strict";

const navigation = {
    templateUrl: "js/components/nav/nav.html",
    controller: [function() {
        const vm = this;
    }]
}

angular
.module("App")
.component("navigation", navigation);