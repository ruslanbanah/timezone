(function() {
  'use strict';

  angular
      .module('tz')
      .controller('TimeZoneController', function($scope, _, timezoneFactory, timezoneService, Zone) {
        $scope.selectTimezone = '';
        $scope.selectCountry = '';
        $scope.editMode = '';
        $scope.countries = {};
        $scope.timezones = timezoneService.get();
        $scope.timeZoneList = timezoneFactory.getTimezone();

        $scope.prepareCityList = function() {
          $scope.countries = timezoneFactory.get($scope.selectTimezone);
        };

        $scope.deleteTimezone = function($index) {
          if (confirm('Are you sure ?')) {
            timezoneService.delete($index);
          }
        };
        $scope.editTimezone = function(timezone) {
          $scope.editMode = timezone;
          $scope.selectTimezone = timezone.timezone;
          $scope.selectCountry = timezone.name;
        };
        $scope.saveEdit = function(timezone) {
          timezone.setData({name: $scope.selectCountry, timezone: $scope.selectTimezone});
          $scope.selectTimezone = $scope.selectCountry = $scope.editMode = '';
        };
        $scope.addToList = function() {
          timezoneService.add(new Zone({name: $scope.selectCountry, timezone: $scope.selectTimezone}));
          $scope.selectTimezone = $scope.selectCountry = '';
        };
        $scope.validate = function() {
          return !($scope.selectTimezone && $scope.selectCountry);
        };
      });
})();
