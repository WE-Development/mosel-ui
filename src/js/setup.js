var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

var wurl = require('wurl');
jQuery.extend({
    url: function(arg, url) { return wurl(arg, url); }
});

require('jquery-ui-browserify');
require('bootstrap');
require('highcharts');