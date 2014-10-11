/**
 * Created by larsbunting on 11.10.14.
 */
export default {
  name: 'socket',

  initialize: function(container, app) {
    var socket = io.connect("http://192.168.2.38:8888");

    app.register('socket:main', socket, {instantiate: false});
    app.inject('controller:chat', 'socket', 'socket:main');
  }
};