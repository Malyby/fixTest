import angular from "angular";

angular
    .module("playersList")
    .controller("PlayersListController", PlayersListController);

    function PlayersListController(Search, $uibModal, dataService) {
        var self = this;

        self.$onInit = init;
        function init() {
            self.searchText = "";
            self.createPlayerModal = createPlayerModal;
            self.search = search;
            
            playerInit();
        }
        
        function playerInit() {
            dataService
                .getPlayers()
                .then((players) => {
                    self.players = players;
                });
        }

        function search() {
            if (self.searchText) {
                Search
                    .search({"q": self.searchText})
                    .$promise
                    .then((res) => {
                        self.players = res.filter(item => item.nickname.toLowerCase().includes(self.searchText.toLowerCase()));
                    });
            } else {
                self.players = playerInit();
            }
        }

        function createPlayerModal() {
            $uibModal.open({
                animation: self.animationsEnabled,
                backdrop: 'static',
                controller: "createPlayerController",
                controllerAs: "self",
                template: require("../createPlayer/createPlayer.template.html")
            })
            .result
            .then((reason) => {
                if (reason === "success") {
                    playerInit();
                }
            })
        }
    }