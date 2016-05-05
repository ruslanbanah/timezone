/**
 * Created by ruslanbanah on 4/26/16.
 */
(function () {
  'use strict';

  angular
      .module('tz')
      .controller('TimeZoneController', function ($scope, _, timezoneFactory, timezoneService, Zone) {
        $scope.selectTimezone = '';
        $scope.selectCountry = '';
        $scope.countries = {};
        $scope.timezones = timezoneService.get();
        $scope.timeZoneList = timezoneFactory.getTimezone();
        $scope.$watch('selectTimezone', function() {
          $scope.countries = timezoneFactory.get($scope.selectTimezone);
        });

        $scope.deleteTimezone = function($index) {
          timezoneService.delete($index);
          console.log('Delete: ',$index);
        };
        $scope.editTimezone = function(timezone) {
          console.log('Edit: ',timezone);
        };
        $scope.addToList = function() {
          timezoneService.add(new Zone({name: $scope.selectCountry, timezone: $scope.selectTimezone}));
        }
      });
})();
