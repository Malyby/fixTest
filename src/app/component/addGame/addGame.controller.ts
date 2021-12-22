import angular from "angular";

angular
    .module("addGame")
    .controller('addGameController', addGameController);

    function addGameController(dataService, filterGames, Game, player, $uibModalInstance) {
        var self = this;
        
        self.$onInit = init;
        
        function init() {
            self.player = player;
            self.initData = initData();
            self.addGame = addGame;
            self.filterGamesForPlayer = filterGamesForPlayer;
            self.closeModal = closeModal;
        }

        function initData() {
            Game
                .get({"platform": self.player.platform})
                .$promise
                .then(function(games) {
                    self.games = self.filterGamesForPlayer(games);
                });
        }

        function filterGamesForPlayer(games) {
            return games.filter((game) => 
                filterGames.checkDateRelease(game.date_release) && 
                filterGames.checkAgeLimit(game.rating, self.player.age) && 
                filterGames.checkRepeatGame(game.id, self.player.games_id)
            );
        } 

        function addGame() {
            //Костыль замена через пост не работает
            dataService
                .updatePlayer({
                    id: self.player.id,
                    nickname: self.player.nickname,
                    age: self.player.age,
                    phone: self.player.phone,
                    email: self.player.email,
                    platform: self.player.platform,
                    games_id: self.player.games_id.concat(+self.game.id)
                })
                .then()
                .catch((err) => {
                    alert("Что-то пошло не так"+err.statusText)
                });
        }

        function closeModal(reason) {
            $uibModalInstance.close(reason);
        };
    }