  
const { Plugin } = require('powercord/entities');

module.exports = class Mock extends Plugin {
  startPlugin () {
        document.addEventListener("click",         function play() {
            var audio = new Audio('https://raw.githubusercontent.com/SomeAspy/croissant/main/croissant%20sound.mp3');
            audio.play();
          })
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('mock');
  }
};