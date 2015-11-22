"use strict"; /*Strict mode makes it easier to write "secure" JavaScript.Strict mode changes previously accepted "bad syntax" into real errors.*/

// Controllers are where we define our app’s behavior by defining functions and values.

(function () {
  // body...Wrapping your Javascript in a closure is a good habit!

  var phonecatApp = angular.module('phonecatApp',[]);
  // We'll use Angular's $http service in our controller to make an HTTP request to your web server to fetch the data in the app/phones/phones.json file

  phonecatApp.controller('PhoneListCtrl',['$http',function ($http) {
    // $http returns a Promise, so success gets the data
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
})();
