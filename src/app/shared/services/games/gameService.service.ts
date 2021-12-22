import angular from "angular";

angular
    .module("gameService")
    .factory("Game", 
        function($resource) {
            return $resource("http://localhost:3000/games", {platform: "@platform"}, {
                get: {
                    platform: "@platform",
                    isArray: true
                }
            });
        }
    )
