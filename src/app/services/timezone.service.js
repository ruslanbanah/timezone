/**
 * Created by ruslanbanah on 4/26/16.
 */
(function() {
  angular
      .module('tz')
      .service('timezoneService', function() {
        var timezone = [];

        return {
          add: addTimezone,
          get: getTimezone,
          delete: deleteTimezone
        };

        function addTimezone(timezoneModel) {
          timezone.push(timezoneModel);
          console.log('Add : ', timezoneModel, ' Total: ', timezone);
        }

        function getTimezone() {
          return timezone;
        }

        function deleteTimezone(index) {
          timezone.splice(index, 1);
        }
      })
})();
