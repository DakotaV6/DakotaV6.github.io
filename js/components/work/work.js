"use strict";

const work = {
    templateUrl: "js/components/work/work.html",
    controller: ["PortfolioService", function(PortfolioService) {
        const vm = this;

        vm.projectCards = PortfolioService.getProjects();
    }]
}

angular
.module("App")
.component("work", work);