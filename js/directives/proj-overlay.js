"use strict";

function projOverlay() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {

            $element.on("mouseenter", () => {
                if ($element[0].tagName === "DIV") {
                    $element[0].lastElementChild.classList.toggle("hide");
                }
            });
            $element.on("mouseleave", () => {
                if ($element[0].tagName === "DIV") {
                    $element[0].lastElementChild.classList.toggle("hide");
                }
            });
        }
    };
}

angular
    .module("App")
    .directive("projOverlay", projOverlay);