import angular from "angular";

require("./editPlayer.controller");

angular
    .module("editPlayer")
    .component("editPlayerComponent", {
        controller: "editPlayerController",
        controllerAs: "self",
        template: require('./editPlayer.template.html')
    });