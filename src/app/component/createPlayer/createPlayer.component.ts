import angular from "angular";

require("./createPlayer.controller");

angular
    .module("createPlayer")
    .component("createPlayer", {
        controller: "createPlayerController",
        controllerAs: "self",
        template: require("./createPlayer.template.html")
    });