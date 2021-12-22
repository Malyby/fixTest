import angular from "angular";

angular
    .module("general")
    .component("general", {
        template: require("./general.template.html")
    });