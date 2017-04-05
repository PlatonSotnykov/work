require('./scroller.less');
var Backbone = require('backbone');
var $ = require('jquery');

var ScrollerItem = Backbone.View.extend({
    className: "scroller-item",
    render: function() {
        this.$el.append($('<div>').addClass('scroller-item-content').html("Content"));
        return this;
    }
});

var Scroller = Backbone.View.extend({
    className: "scroller",
    ScrollerItem: ScrollerItem,
    initialize: function(opt) {
        this.itemsCount = opt && opt.itemsCount || 5;
    },
    left: function() {
        this._stopAnimation();
        this.$el.prepend((new this.ScrollerItem).render().$el);
        this.$el.children().last().remove();
    },
    right: function() {
        this._stopAnimation();
        this.$el.append((new this.ScrollerItem).render().$el);
        this.$el.children().first().remove();
    },
    render: function() {
        var i;

        for (i = 0; i < this.itemsCount; i++) {
            this.$el.append((new this.ScrollerItem).render().$el);
        }
        return this;
    },
    _stopAnimation: function() {
        this.$el.addClass('scroller_noanim')[0].offsetHeight;
        this.$el.removeClass('scroller_noanim');
    }
});

var No3dScrollerItem = ScrollerItem.extend({
    className: "no3dScroller-item"
});

var No3DScroller = Scroller.extend({
    className: "no3dScroller",
    ScrollerItem: No3dScrollerItem,
});

var NoTransformScrollerItem = ScrollerItem.extend({
    className: "noTransformScroller-item"
});

var NoTransformScroller = Scroller.extend({
    className: "noTransformScroller",
    ScrollerItem: NoTransformScrollerItem,
});

module.exports = {
    Scroller: Scroller,
    No3DScroller: No3DScroller,
    NoTransformScroller: NoTransformScroller
};
