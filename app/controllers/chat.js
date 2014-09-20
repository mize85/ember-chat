import Ember from 'ember';

export default Ember.ArrayController.extend({

    socket: null,

    init: function(){
        this._super();

        var self = this;
        var socket = io.connect("127.0.0.1:8888");

        this.set("socket", socket);

        socket.on('chat', function (data) {

            Ember.Logger.debug(data);
            self.get("content").pushObject(data);
        });
        // nach unten scrollen
        Ember.$('body').scrollTop(Ember.$('body')[0].scrollHeight);
    },


    text: null,
    name: null,

    actions:{

        sendMessage: function(){
            var name = this.get("name");
            var text = this.get("text");

            var socket = this.get("socket");

            socket.emit('chat', { name: name, text: text });
            // Text-Eingabe leeren
            this.set("text", null);
        }

    }
});
