(function() {
  'use strict';

  angular
      .module('tz')
      .config(function($logProvider) {
        $logProvider.debugEnabled(true);
      });

})();
