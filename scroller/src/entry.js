var $ = require('jquery');
var Scroller = require('./Scroller');
var keyhandler = require('./keyhandler');
require('../index.html');

var scroller = new Scroller({itemsCount: 5});

keyhandler.on("keydown", function(key) {
    if (key === "left" || key === "right") {
        scroller[key]();
    }
});

$('#root_id').append(scroller.render().$el);
