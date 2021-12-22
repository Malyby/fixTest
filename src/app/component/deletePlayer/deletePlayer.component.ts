import angular from "angular";

require("./deletePlayer.controller");

angular
    .module("deletePlayer")
    .component("deletePlayerComponent", {
        controller: "deletePlayerController",
        controllerAs: "self",
        template: require('./deletePlayer.template.html')
    });