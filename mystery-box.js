(function() {
  "use strict";
  const IMG_PATH = "img/";
  const POWER_UPS = ["bee-mushroom.png", "fire-flower.png", "ice-flower.png",
                     "star.png", "super-mushroom.png"];

  window.addEventListener("load", init);

  function init() {
    // TODO: Add event handler to call showRandomPowerup when the mystery box image is
    // clicked
    let ele = document.getElementsByTagName("img")[0];
    ele.addEventListener("click",showRandomPowerup);
  }

  /*
   * Changes the image of the mystery box to a random powerup!
   */
  function showRandomPowerup() {
    // TODO: Get random string from POWER_UPS
    let num = Math.floor(Math.random()*POWER_UPS.length);
    let random = POWER_UPS[num];

    // TODO: Change src of mystery box image to the source of the powerup image
    document.getElementsByTagName("img")[0].src = IMG_PATH + random;
  }
})();
