(function() {
  'use strict';

  angular
      .module('tz')
      .factory('Zone', function() {
        function Zone(zoneData) {
          if (zoneData) {
            this.setData(zoneData);
          }
        }

        Zone.prototype = {
          setData: function(zoneData) {
            angular.extend(this, zoneData);
          },
          getUTC: function() {
            var tz = moment.tz(this.name);
            return 'UTC' + tz.format('Z');
          }
        };

        return Zone;
      });
})();
