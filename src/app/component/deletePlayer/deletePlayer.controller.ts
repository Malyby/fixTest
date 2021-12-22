import angular from "angular";

angular
    .module("deletePlayer")
    .controller("deletePlayerController", deletePlayerController);

    function deletePlayerController(dataService, $uibModalInstance, player) {
        var self = this;

        self.$onInit = init;

        function init() {
            self.player = player;
            self.nickname = "";
            self.deletePlayer = deletePlayer;
            self.closeModal = closeModal;
        }

        function deletePlayer() {
            dataService
                .deletePlayer(self.player.id)
                .then()
                .catch((err) => {
                    alert("Ошибка: "+err.statusText);
                });
        }

        function closeModal(reason) {
            $uibModalInstance.close(reason);
        };
    }