
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    /*
      helperName: function () {
        this.click()
        ...etc
      }
    */
   seeVideoPlaying: function () {
     this.wait(5) // hacky mc hacking hackerson 😂 👌
   }
  });
}
