import angular from "angular";

require('./addGame.controller');

angular
    .module("addGame")
    .component("addGameComponent", {
        controller: 'addGameController',
        controllerAs: 'self',
        template: require('./addGame.template.html')
    });