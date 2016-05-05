(function() {
  'use strict';
  
  angular
      .module('tz')
      .service('timezoneService', function() {
        var timezone = [];

        return {
          addTimezone: addTimezone,
          getList: getTimezone,
          deleteTimezone: deleteTimezone
        };

        function addTimezone(timezoneModel) {
          timezone.push(timezoneModel);
        }

        function getTimezone() {
          return timezone;
        }

        function deleteTimezone(index) {
          timezone.splice(index, 1);
        }
      })
})();
