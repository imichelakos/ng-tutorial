"use strict";

// Controllers are where we define our app’s behavior by defining functions and values.

(function () {
  
  var phonecatControllers = angular.module('phonecatControllers',[]);

  phonecatControllers.controller('PhoneListCtrl',['Phone',function (Phone) {

    this.phones=Phone.query();
    this.orderProp='age';
  }]);

  phonecatControllers.controller('PhoneDetailCtrl',['$routeParams','Phone',function ($routeParams,Phone) {
    // body...
        var vm=this;
        vm.phone = Phone.get({phoneId:$routeParams.phoneId},function (phone) {
            // body...
            vm.mainImageUrl = phone.images[0];
          }
        );

        vm.setImage=function (imageUrl) {
          // body...
          vm.mainImageUrl = imageUrl;
        };

      }
  ]);

})();
