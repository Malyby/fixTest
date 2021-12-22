import angular from "angular";

require("./gamesList.controller");

angular
    .module("gamesList")
    .component("gamesList", {
        controller: "GamesListController",
        controllerAs: "self",
        template: require("./gamesList.template.html")
    });