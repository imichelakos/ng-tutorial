// Services

"use strict";

(function () {
  // body...wrapping

  //module creation
  var phonecatServices = angular.module('phonecatServices',['ngResource']);
    //We create our own service to provide access to the phone data on the server
    phonecatServices.factory('Phone',['$resource',function ($resource) {
      // body...
      return $resource('phones/:phoneId.json',{},{
        query:{method:'GET',params:{phoneId:'phones'}, isArray: true}
      });
    }]);
})();
