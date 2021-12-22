(function () {
    'use strict';
    
    angular
        .module("validateUniquePhone")
        .directive("validateUniquePhone", function(Search, $q) {
            return {
                require: 'ngModel',
                link:function($scope, element, attrs, ctrl) {
                    ctrl.$asyncValidators.checkPhone = function(modelValue, viewValue) {
                        const def = $q.defer();
                        Search 
                            .get({"phone": viewValue})
                            .$promise
                            .then(function(player) {
                                if (player.length === 1 && player[0].id != attrs.validateUniquePhone) {
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