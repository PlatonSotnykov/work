var $ = require('jquery');
var Scroller = require('./Scroller').Scroller;
var No3DScroller = require('./Scroller').No3DScroller;
var NoTransformScroller = require('./Scroller').NoTransformScroller;
var keyhandler = require('./keyhandler');
require('../index.html')

var scrollers = [
    new Scroller({itemsCount: 7}),
    new No3DScroller({itemsCount: 7}),
    new NoTransformScroller({itemsCount: 7})
];

keyhandler.on("keydown", function(key) {
    if (key === "left" || key === "right") {
        scrollers.forEach(function(scroller) {
            scroller[key]();
        })
    }
});

scrollers.forEach(function(scroller) {
    $('#root_id').append(scroller.render().$el);
})
