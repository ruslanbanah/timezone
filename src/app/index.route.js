/**
 * Created by ruslanbanah on 4/26/16.
 */
(function() {
  'use strict';

  angular
      .module('tz')
      .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('timezone', {
          url: "/",
          templateUrl: "app/main/main.html",
          controller: 'TimeZoneController'
        });
  }

})();
