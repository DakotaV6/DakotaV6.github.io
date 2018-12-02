"use strict";

const about = {
    templateUrl: "js/components/about/about.html",
    controller: [function() {
        const vm = this;
    }]
}

angular
.module("App")
.component("about", about);