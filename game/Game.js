const EventEmitter = require('events');

class Game extends EventEmitter{
    constructor(){
        super()
        this.history = []

        this.on('event', (event_data) => {
            this.history.push(event_data)
            console.log(`event:`,event_data)
        });

        this.emit('event',{type:"game_start"})
    }
}

module.exports = {Game}