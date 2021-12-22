import angular from "angular";

angular
    .module("gamesList")
    .controller("GamesListController", GamesListController);

    function GamesListController(Game) {

        var self = this;

        self.$onInit = init;

        function init() {
            Game
                .query()
                .$promise
                .then(function(res) {
                    self.games = res;
                });
        }
        
        

        self.checkDateRelease = function(data_release) {
            const current_date = new Date().getTime();
            if (data_release > current_date) {
                return true
            }
        }
    }