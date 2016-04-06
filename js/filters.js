"use strict";
// Custom Filters

(function () {
  // body...wrapping
  angular.module('phonecatFilters',[])
    .filter('checkmark',function () {
      // body...
      return function (input) {
        // body...
        return input ? '\u2713' : '\u2718';
      };
    });
})();
