var MyPhotos = function() {
    Activity.call(this, '#myPhotos');
};

MyPhotos.prototype = $.extend({}, Activity.prototype);