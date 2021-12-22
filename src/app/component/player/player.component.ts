import angular from "angular";

require('./player.controller');

angular
    .module("player")
    .component("player", {
        controller: "PlayerController",
        controllerAs: "self",
        template: require('./player.template.html')
    });