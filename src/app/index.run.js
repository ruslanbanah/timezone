(function() {
  'use strict';

  angular
      .module('tz')
      .run(function($log) {
        $log.debug('run Time Zone.');
      });

})();