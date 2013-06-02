var RatedPhotos = function() {
    Activity.call(this, '#ratedPhotos');
    this.image = this.dom.find('#imagePreview');
};

RatedPhotos.prototype = $.extend({}, Activity.prototype);