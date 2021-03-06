import Ember from 'ember';

export default Ember.ArrayController.extend({

    socket: null,

    init: function(){
        this._super();

        var self = this;

        this.socket.on('chat', function (data) {

            Ember.Logger.debug(data);
            self.get("content").pushObject(data);

            // nach unten scrollen
            Ember.$('.panel-body').scrollTop(Ember.$('.panel-body')[0].scrollHeight);
        });

    },


    text: null,
    name: null,

    actions:{

        sendMessage: function(){
            var name = this.get("name");
            var text = this.get("text");



            this.socket.emit('chat', { name: name, text: text });
            // Text-Eingabe leeren
            this.set("text", null);
        }

    }
});
