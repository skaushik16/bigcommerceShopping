'use strict';

(function () {
  angular
    .module('bCommShop', [
      'ui.router',

      'bCommShop.translate'

     
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $stateProvider.state({
        name: 'home',
        url: '/'
      });

      $urlRouterProvider.otherwise('/');
    }]);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['bCommShop']);
  });
})()
