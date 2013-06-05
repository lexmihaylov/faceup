var MyPhotos = function() {
    Activity.call(this, '#myPhotos');
    var scroll = new iScroll('myPhotos');
};

MyPhotos.prototype = $.extend({}, Activity.prototype);