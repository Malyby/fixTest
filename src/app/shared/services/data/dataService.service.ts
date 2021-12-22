import angular from "angular";
    
angular
    .module("dataService")
    .service("dataService", function(Player) {
        var addPlayer = function(player) {
            return Player
                    .create(player)
                    .$promise
                    .then((player) => player);
        }

        var deletePlayer = function(id) {
            return Player
                    .delete({"id": id})
                    .$promise
                    .then((player) => player)
        }

        var getPlayer = function(id) {
            return Player
                    .get({"id": id})
                    .$promise
                    .then((player) => player);
        }

        var getPlayers = function() {
            return Player
                    .query()
                    .$promise
                    .then((players) => players);
        }

        var updatePlayer = function({id, nickname, age, phone, email, platform, games_id}) {
            return Player
                    .save({
                        "id": id,
                        "nickname": nickname,
                        "age": age,
                        "phone": phone,
                        "email": email,
                        "platform": platform,
                        "games_id": games_id
                    })
                    .$promise
                    .then((player) => player)
        }

        return {
            addPlayer,
            deletePlayer,
            getPlayer,
            getPlayers,
            updatePlayer
        }
    });