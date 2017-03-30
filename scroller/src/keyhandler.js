var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var key2code = {
    enter: 13,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    exit: 69,
    guide: 71,
    info: 73,
    last: 76,
    menu: 77,
    pause: 80,
    stop: 81,
    select: 83,
    play: 90,
    chup: 221,
    chdown: 219,
    pgup: 33,
    pgdown: 34,
    rew: 188,
    ffwd: 190,
    cc: 460,
    hash: 112,
    power: 89,
    volup: 124,
    voldown: 127,
    mute: 125,
    vod: 86,
    yellow: 67,
    blue: 130,
    red: 65,
    green: 66
};

function KeyHandler() {
    var _this = this;

    _.extend(this, Backbone.Events);

    this.map = {};
    _.each(key2code, function(code, key) {
        if (Array.isArray(code)) {
            _.each(code, function(code) {
                _this.map[code] = key;
            });
        } else {
            _this.map[code] = key;
        }
    });

    $(document).on('keydown', _.throttle(function(event) {
        var key = _this.map[event.keyCode];
        key && _this.trigger('keydown', key);
    }, 200));
}

module.exports = new KeyHandler;
