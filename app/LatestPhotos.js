var LatestPhotos = function() {
    Activity.call(this, '#latestPhotos');
    this.wrapper = this.dom.find('.wrapper');
    this.loading = this.dom.find('.loading');
    this.isLoaded = false;
};

LatestPhotos.prototype = $.extend({}, Activity.prototype);

LatestPhotos.prototype.show = function () {
    Activity.prototype.show.call(this);
    
    var _this = this;
    
    
    if(!_this.isLoaded) {
        _this.loading.show();
        _this.wrapper.empty();
        $.get(FaceUp.Api + 'latest_photos', function(response) {

            _this.loadData(response.data);

            _this.isLoaded = true;
            _this.loading.hide();
            
            var scroll = new iScroll('latestPhotos');
        });
    }
};


LatestPhotos.prototype.loadData = function(data) {
    var ul = $('<ul class="image-list" />');
    this.wrapper.append(ul);
    
    for(var j = 0; j < 25; j++)
    for(var i = 0; i < data.length; i++) {
        var item = $('<li/>');
        var photo_id = data[i].id;
        var image = $('<span class="image" />');
        
        image.css('background-image', 'url('+data[i].photo+')');
        
        var text = $('<div class="title"><b>' + data[i].name + '</b></div>');
        var views = $('<div class="votes">' + data[i].votes + '</div>');
        var rating = $('<div><span class="avg_rate">' + data[i].avg_rating+ '%</div>');
        var progress = $('<div></span><span class="progress"><span class="percentage-preview" style="width: '+data[i].avg_rating+'%"></span></span></div>')
        
        item.append(progress).
            append(image).
            append(text).
            append(views).
            append(rating);
        
        
        
        item.tab(function() {
            FaceUp.Activity.pdetails.show(photo_id);
        });
        
        ul.append(item);
    }
};