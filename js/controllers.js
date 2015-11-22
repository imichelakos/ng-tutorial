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
       'snippet':'Fast just got faster with Nexus S.'},
      {'name':'Motorola XOOM™ with Wi-Fi',
       'snippet':'The Next, Next Generation tablet.'},
      {'name':'Motorola XOOM',
       'snippet':'The Next, Next Generation tablet.'}
    ];
  });
})();
