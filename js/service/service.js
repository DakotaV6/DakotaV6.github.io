"use strict";

function PortfolioService() {
    const self = this;

    self.projects = [
        {
            name: "The HEARD",
            img: "../images/the-heard-project.JPG",
            url: "https://the-heard.herokuapp.com/#!/about",
            github: "https://github.com/DakotaV6/the-herd",
            description: "An interactive web app built with Spotify API and AngularJS."
        },
        {
            name: "The Back Door",
            img: "../images/back-door-snap.PNG",
            url: "https://dakotav6.github.io/the-back-door-project/#home",
            github: "https://github.com/DakotaV6/the-back-door-project",
            description: "Shopping cart project using HTML, CSS, JavaScript, & jQuery."
        },
        {
            name: "Flashing Lights",
            img: "../images/angular-project-snap.PNG",
            url: "https://dakotav6.github.io/event-search-project-ng/#!/",
            github: "https://github.com/DakotaV6/event-search-project-ng",
            description: "Event search application using TicketMaster API and AngularJS."
        }
    ];

    self.getProjects = () => {
        return self.projects;
    };
};

angular.module("App")
.service("PortfolioService", PortfolioService);