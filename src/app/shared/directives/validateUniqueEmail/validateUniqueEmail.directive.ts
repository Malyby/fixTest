(function () {
    'use strict';
    //У валидация присутсвует регистрозависимость
    angular
        .module("validateUniqueEmail")
        .directive("validateUniqueEmail", function(Search, $q) {
            return {
                require: 'ngModel',
                link:function($scope, element, attrs, ctrl) {
                    ctrl.$asyncValidators.checkEmail = function(modelValue, viewValue) {
                        const def = $q.defer();
                        Search 
                            .get({"email": viewValue})
                            .$promise
                            .then(function(player) {
                                if (player.length === 1 && player[0].id != attrs.validateUniqueEmail) {
                                    return def.reject();
                                }
                                return def.resolve();
                            });
                        return def.promise;
                    }
                }
            }
        })
})();