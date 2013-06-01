var LatestPhotos = function() {
    Activity.call(this, '#latestPhotos');
};

LatestPhotos.prototype = $.extend({}, Activity.prototype);

LatestPhotos.prototype.show = function () {
    Activity.prototype.show.call(this);
    var _this = this;
    $.get(FaceUp.Api + 'latest_photos', function(response) {
        _this.loadData(response.data);
    });
};


LatestPhotos.prototype.loadData = function(data) {
    var ul = $('<ul class="image-list" />');
    this.dom.append(ul);
    
    for(var i =0; i < data.length; i++) {
        var item = $('<li/>');
        
        var image = $('<span class="image" />');
        
        image.css('background-image', 'url('+data[i].photo+')');
        
        var text = $('<div class="title">' + data[i].name + '</div>');
        var views = $('<div class="title">' + data[i].name + '</div>');
        var rating = $('<div class="title">' + data[i].name + '</div>');
        
        item.append(image).
            append(text).
            append(views).
            append(rating);
        
        ul.append(item);
    }
};