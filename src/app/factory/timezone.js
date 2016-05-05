/**
 * Created by boom on 04.05.16.
 */
(function() {
  'use strict';

  angular
      .module('tz')
      .factory('timezoneFactory', ['_', 'moment', function(_, moment) {
        return {
          get: function(timezone) {
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
          getTimezone: function() {
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