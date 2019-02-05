"use strict";

const pageHeader = {
    templateUrl: "js/components/header/header.html",
    controller: [function() {
        const vm = this;
    }]
}

angular
.module("App")
.component("pageHeader", pageHeader);