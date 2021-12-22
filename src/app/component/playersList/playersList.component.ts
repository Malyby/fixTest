import angular from "angular";

require("./playersList.controller");

angular
    .module("playersList")
    .component("playersList", {
        controller: "PlayersListController",
        controllerAs: "self",
        template: require("./playersList.template.html")
    });