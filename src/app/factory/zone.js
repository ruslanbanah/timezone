/**
 * Created by boom on 04.05.16.
 */
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
          }
        };

        return Zone;
      });
})();