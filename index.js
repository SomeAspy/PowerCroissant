  
const { Plugin } = require('powercord/entities');

module.exports = class PowerCroissant extends Plugin {
  startPlugin () {
        document.addEventListener("click",         function play() {
            var audio = new Audio('https://raw.githubusercontent.com/SomeAspy/PowerCroissant/main/croissant%20sound.mp3');
            audio.play();
          })
  }

  pluginWillUnload () {}
};
