import angular from 'angular';
const uiRouter = require('@uirouter/angularjs');
require('angular-resource');
import angularUiBootstrap from 'angular-ui-bootstrap';
//Components
import './component/mainMenu/mainMenu.module';
import './component/player/player.module';
import './component/playersList/playersList.module';
import './component/gamesList/gamesList.module';
import './component/createPlayer/createPlayer.module';
import './component/editPlayer/editPlayer.module';
import './component/deletePlayer/deletePlayer.module';
import './component/addGame/addGame.module';
//Services
import './shared/services/data/dataService.module';
import './shared/services/player/playerService.module';
import './shared/services/games/gameService.module';
import './shared/services/search/searchService.module';
import './shared/services/filterGames/filterGames.module';
//Directives
import './shared/directives/validateUniqueEmail/validateUniqueEmail.module';
import './shared/directives/validateUniquePhone/validateUniquePhone.module';
import './shared/directives/validateNickname/validateNickname.module';

angular.module('app', [
    angularUiBootstrap,
    uiRouter.default,
    //Components
    'mainMenu',
    'player',
    'playersList',
    'gamesList',
    'createPlayer',
    'editPlayer',
    'deletePlayer',
    'addGame',
    //Services
    'dataService',
    'playerService',
    'gameService',
    'searchService',
    'filterGames',
    //Directives
    'validateUniqueEmail',
    'validateUniquePhone',
    'validateNickname'
]);
require('./app.constants');
require('./app.config');

