(function () {
    'use strict';
    angular.module('app').controller('mainController', mainController);
    mainController.$inject = ['$scope'];
    function mainController($scope) {
        var vm = this;
        vm.test = 'testing this controller';
        init();
        function init() {
        }
    }
})();
