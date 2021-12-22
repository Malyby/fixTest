import angular from "angular";

angular
    .module("player")
    .controller("PlayerController", PlayerController);

    function PlayerController(dataService, Game, $location, $stateParams, $uibModal) {
        var self = this;

        self.$onInit = init;

        function init() {
            self.editPlayerModal = editPlayerModal;
            self.deletePlayerModal = deletePlayerModal;
            self.addGameModal = addGameModal;
            self.initData = initData();
        }

        function initData() {
            dataService
                .getPlayer($stateParams.id)
                .then(setCurrentPlayer)
                .then(getGamesForPlayer)
                .then(setGamesForPlayer)
                .catch((err) => {
                    alert("Что-то пошло не так: "+err.statusText);
                });
        }

        function setCurrentPlayer(player) {
            self.player = player;
            return self.player;
        }

        function getGamesForPlayer(player) {
            if (player.games_id.length != 0) {
                return Game
                    .get({
                        id: player.games_id
                    })
                    .$promise;
            }
            return [];
        }

        function setGamesForPlayer(games) {
            self.player_games = games;
        }

        function editPlayerModal() {
            $uibModal
                .open({
                    animation: self.animationsEnabled,
                    backdrop: 'static',
                    controller: "editPlayerController",
                    controllerAs: "self",
                    template: require("../editPlayer/editPlayer.template.html"),
                    resolve: {
                        player: angular.bind(null, angular.identity, self.player),
                        player_games: angular.bind(null, angular.identity, self.player_games)
                    }
                })
                .result
                .then((reason) => {
                    if(reason === "success") {
                        initData();
                    }
                });
        }

        function deletePlayerModal() {
            $uibModal
                .open({
                    animation: self.animationsEnabled,
                    backdrop: 'static',
                    controller: "deletePlayerController",
                    controllerAs: "self",
                    template: require("../deletePlayer/deletePlayer.template.html"),
                    resolve: {
                        player: angular.bind(null, angular.identity, self.player)
                    }
                })
                .result
                .then((reason) => {
                    if (reason === "success") {
                        $location.path("/players");
                    }
                })
        }

        function addGameModal() {
            $uibModal
                .open({
                    animation: self.animationsEnabled,
                    backdrop: 'static',
                    controller: "addGameController",
                    controllerAs: "self",
                    template: require("../addGame/addGame.template.html"),
                    resolve: {
                        player: angular.bind(null, angular.identity, self.player)
                    }
                })
                .result
                .then((reason) => {
                    if(reason === "success") {
                        initData();
                    }
                });
        }
    }