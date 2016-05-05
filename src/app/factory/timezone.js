(function() {
  'use strict';

  angular
      .module('tz')
      .factory('timezoneFactory', ['_', 'moment', function(_, moment) {
        return {
          getTimezonesCityByOffset: function(timezone) {
            return timezone ? _.filter(moment.tz.names(), function(zoneName) {
              var tz = moment.tz(zoneName);
              return timezone == tz.utcOffset();
            }).map(function(zoneName) {
              return {
                id: zoneName,
                name: zoneName.replace(/_/g, ' ')
              }
            }) : [];
          },
          getTimezonesUniqueOffset: function() {
            var timezoneMap = {};
            _.forEach(moment.tz.names(), function(zoneName) {
              var tz = moment.tz(zoneName);
              timezoneMap[tz.utcOffset()] = 'UTC' + tz.format('Z');
            });
            return timezoneMap;
          }
        }
      }])
})();
