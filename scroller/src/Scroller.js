require('./scroller.less');
var Backbone = require('backbone');

var ScrollerItem = Backbone.View.extend({
    className: "scroller-item",
    render: function() {
        this.$el.html('content');
        return this;
    }
});

var Scroller = Backbone.View.extend({
    className: "scroller",
    initialize: function(opt) {
        this.itemsCount = opt && opt.itemsCount || 5;
    },
    left: function() {
        this.$el.prepend((new ScrollerItem).render().$el);
        this.$el.children().last().remove();
    },
    right: function() {
        this.$el.append((new ScrollerItem).render().$el);
        this.$el.children().first().remove();
    },
    render: function() {
        var i;

        for (i = 0; i < this.itemsCount; i++) {
            this.$el.append((new ScrollerItem).render().$el);
        }
        return this;
    }
});

module.exports = Scroller;
