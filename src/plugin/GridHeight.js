/**
 * Expand grid to height of contents
 *
 * TODO:
 * - Maybe leave scroller alive but configure it to support horizontal scrolling if needed?
 */
Ext.define('Jarvus.plugin.GridHeight', {
    extend: 'Ext.Component',
    alias: 'plugin.gridheight',

    config: {
        scrollX: false
    },

    init: function(grid) {
        var scrollable = grid.getScrollable();

        scrollable.setDisabled(true);
        scrollable.setX(this.getScrollX());

        grid.setInfinite(false);
        grid.addCls('jarvus-grid-autoheight');
    }
});
