"use strict"; /*Strict mode makes it easier to write "secure" JavaScript.Strict mode changes previously accepted "bad syntax" into real errors.*/

// Controllers are where we define our app’s behavior by defining functions and values.

(function () {
  // body...Wrapping your Javascript in a closure is a good habit!

  var phonecatApp = angular.module('phonecatApp',[]);
  // το πρώτο στοιχείο που συμπίπτει με το όνομα της παραμέτρου είναι το όνομα της εφαρμογής
  // το δεύτερο στοιχείο ([]), αφορά τις απαιτούμενες βιβλιοθήκες αν υπάρχουν

  phonecatApp.controller('PhoneListCtrl',function () { /*στο σημείο αυτό μπορούμε να περάσουμε ως παράμετρο την $scope -- 2η μέθοδος -- */
    // body...
    /* Ορισμός του πίνακα phones που περιέχει τα δεδομένα*/
    this.phones = [
      {'name':'Nexus S',
       'snippet':'Fast just got faster with Nexus S.',
       'age':1},
      {'name':'Motorola XOOM™ with Wi-Fi',
       'snippet':'The Next, Next Generation tablet.',
       'age':2},
      {'name':'Motorola XOOM',
       'snippet':'The Next, Next Generation tablet.',
       'age':3}
    ];
    // added an age property to each phone record. This property is used to order phones by age

    // sets the default value of orderProp to age
    this.orderProp='age';
  });
})();
