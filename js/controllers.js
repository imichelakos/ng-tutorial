"use strict";

// Controllers are where we define our app’s behavior by defining functions and values.

(function () {
  // body...Wrapping your Javascript in a closure is a good habit!

  var phonecatControllers = angular.module('phonecatControllers',[]);
  // αλλαγή ονόματος module μιας και το phonecatApp θα το πάρει το κύριο module.

  phonecatControllers.controller('PhoneListCtrl',['$http',function ($http) {
    // αλλαγή του ονόματος του module
    var vm=this; //Δεν μπορούμε μέσα στο success να χρησιμοποιήσουμε το this.
    $http.get('phones/phones.json')
      .success(
        function (data) {
          // body...
          vm.phones = data;
        }
      );

    // sets the default value of orderProp to age
    this.orderProp='age';
  }]);

  // Επέκταση του controller
  phonecatControllers.controller('PhoneDetailCtrl',['$routeParams','$http',function ($routeParams,$http) {
    // body...
    var vm=this;
    // Χρήση της $http όπως και στον παραπάνω controller για να τραβήξουμε τα στοιχεία json
    $http.get('phones/'+$routeParams.phoneId+'.json')
      .success(function (data) {
        // body...
        vm.phone = data;
      });
  }]);

})();
