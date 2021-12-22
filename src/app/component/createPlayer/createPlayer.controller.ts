import angular from "angular";

angular
    .module("createPlayer")
    .controller("createPlayerController", createPlayerController);

    function createPlayerController(dataService, platforms, $uibModalInstance) {
        var self = this;

        self.$onInit = init;

        function init() {
            self.platforms = platforms;
            self.closeModal = closeModal;
        } 

        self.createPlayer = function() {
            self.player = {
                "nickname": self.nickname,
                "age": self.age,
                "phone": self.phone,
                "email": self.email,
                "platform": self.platform,
                "games_id": []
            }
            dataService
                .addPlayer(self.player)
                .catch((err) => alert("Произошла ошибка:"+err.statusText));
        }

        function closeModal(reason) {
            $uibModalInstance.close(reason);
        };
    }