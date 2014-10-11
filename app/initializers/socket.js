/**
 * Created by larsbunting on 11.10.14.
 */
import config from '../config/environment';

export default {
  name: 'socket',

  initialize: function(container, app) {
    var socket = io.connect(config.CHAT_HOST);

    app.register('socket:main', socket, {instantiate: false});
    app.inject('controller:chat', 'socket', 'socket:main');
  }
};