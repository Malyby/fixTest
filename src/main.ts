import angular from 'angular';

import './app/app.module';

angular.module('myApp', [
    'app'
]);
angular.bootstrap(document, ['myApp']);