(function() {
  'use strict';

  angular
      .module('tz')
      .directive("currentTimeZone", function($interval) {
        return function(scope, element, attrs) {
          var showTime = function() {
            element.text(moment(new Date()).tz(attrs.currentTimeZone).format('HH:mm:ss'));
          };
          $interval(showTime,1000);
          showTime();
        }
      })
})();
