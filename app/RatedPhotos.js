var RatedPhotos = function() {
    Activity.call(this, '#ratedPhotos');
    this.image = this.dom.find('#imagePreview');
    
    var scroll = new iScroll('ratedPhotos');
};

RatedPhotos.prototype = $.extend({}, Activity.prototype);