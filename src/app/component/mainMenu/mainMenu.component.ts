import angular from "angular";

angular
    .module("mainMenu")
    .component("mainMenu", {
        template: require("./mainMenu.template.html"),
        style: require("./mainMenu.scss")
    });