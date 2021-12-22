import angular from "angular";

angular.
  module('app')
  .config(function($stateProvider, $locationProvider) {  
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider.state('main', {
      url: "/",
      component: "general"
    });
    $stateProvider.state('players', {
      url: "/players",
      component: "playersList"
    });
    $stateProvider.state('games', {
      url: "/games",
      component: "gamesList"
    });
    $stateProvider.state('player', {
      url: '/players/{id}',
      component: "player"
    });
  })

