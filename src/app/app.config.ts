import angular from 'angular';

angular.
  module('app')
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {  
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider
      .state('players', {
        url: '/players',
        component: 'playersList'
      })
      .state('games', {
        url: '/games',
        component: 'gamesList'
      })
      .state('player', {
        url: '/players/{id}',
        component: 'player'
      })
    $urlRouterProvider.otherwise('/players')
  })

