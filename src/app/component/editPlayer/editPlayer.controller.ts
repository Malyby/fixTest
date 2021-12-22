import angular from "angular";

angular
    .module("editPlayer")
    .controller("editPlayerController", editPlayerController);

    function editPlayerController(dataService, filterGames, platforms, player, player_games,  $uibModalInstance) {
        var self = this;

        self.$onInit = init;

        function init() {
            self.updatePlayer = updatePlayer;
            self.updateGame = updateGame;
            self.closeModal = closeModal;
            self.platforms = platforms;
            self.id = player.id;
            self.nickname = player.nickname;
            self.age = player.age;
            self.phone = player.phone;
            self.email = player.email;
            self.platform = player.platform;
            self.games_id = player.games_id;
            self.player_games = player_games;
        }

         function updatePlayer() {
            updateGame(self.age, self.platform);
            dataService
                .updatePlayer({
                    "id": player.id,
                    "nickname": self.nickname,
                    "age": +self.age,
                    "phone": self.phone,
                    "email": self.email,
                    "platform": self.platform,
                    "games_id": self.games_id
                })
                .catch((err) => {
                    alert("Что-то пошло не так: "+err.statusText);
                });
        }

         function updateGame(age, platform) {
            if (age != player.age) {
                self.games_id = self.player_games
                                    .filter(game => filterGames.checkAgeLimit(game.rating, age))
                                    .map(game => game.id);
            }
            if (platform != player.platform) {
                self.games_id = [];
            }
        }

        function closeModal(reason) {
            $uibModalInstance.close(reason);
        }
    }