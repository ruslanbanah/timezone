(function() {
  'use strict';

  angular
      .module('tz')
      .controller('TimeZoneController', function($scope, _, timezoneFactory, timezoneService, Zone) {
        $scope.selectTimezone = '';
        $scope.selectCity = '';
        $scope.editMode = '';
        $scope.countries = {};
        $scope.timezones = timezoneService.getList();
        $scope.timezonesUniqueOffset = timezoneFactory.getTimezonesUniqueOffset();

        $scope.prepareCityList = function() {
          $scope.timezoneCities = timezoneFactory.getTimezonesCityByOffset($scope.selectTimezone);
        };

        $scope.deleteTimezone = function($index) {
          if (confirm('Are you sure ?')) {
            timezoneService.deleteTimezone($index);
          }
        };
        
        $scope.editTimezone = function(timezone) {
          $scope.editMode = timezone;
          $scope.timezoneCities = timezoneFactory.getTimezonesCityByOffset(timezone.timezone);
          $scope.selectTimezone = timezone.timezone;
          $scope.selectCity = timezone.name;
        };
        
        $scope.saveEdit = function(timezone) {
          timezone.setData({name: $scope.selectCity, timezone: $scope.selectTimezone});
          $scope.selectTimezone = $scope.selectCity = $scope.timezoneCities = $scope.editMode = '';
        };
        
        $scope.addToList = function() {
          timezoneService.addTimezone(new Zone({name: $scope.selectCity, timezone: $scope.selectTimezone}));
          $scope.selectTimezone = $scope.selectCity = $scope.timezoneCities = '';
        };
        
        $scope.validate = function() {
          return !($scope.selectTimezone && $scope.selectCity);
        };
      });
})();
