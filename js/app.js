"use strict";

(function () {
  // body...Wrapping your Javascript in a closure is a good habit!

  // Κύριο Module εφαρμογής
  var phonecatApp = angular.module('phonecatApp',['ngRoute','phonecatControllers','phonecatFilters'
  ]);
  //προσθήκη νέας απαίτησης
  // Routes
  phonecatApp.config(['$routeProvider',
    function ($routeProvider) {
      // body...
      $routeProvider.
        when('/phones',{
          templateUrl: 'partials/phone-list.html',
          controller: 'PhoneListCtrl',
          controllerAs: 'phoneli'
        }).
        when('/phones/:phoneId',{
          templateUrl: 'partials/phone-detail.html',
          controller: 'PhoneDetailCtrl',
          controllerAs: 'phonedet'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);

})();
