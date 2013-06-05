var PhotoDetails = function() {
    Activity.call(this, '#photoDetails');
    this.picid = null;
    this.image = this.dom.find('.image:first');
    this.loading = this.dom.find('.loading:first');
    this.details = this.dom.find('.details:first');
};

PhotoDetails.prototype = $.extend({}, Activity.prototype);

PhotoDetails.prototype.show = function (id) {
    this.picid = id;
    Activity.prototype.show.call(this);
    
    var _this = this;
    _this.loading.show();
    _this.details.empty();
    $.get(FaceUp.Api + 'photo_details?id='+_this.picid, function(response) {
        _this.loadData(response.data);
        _this.loading.hide();
        var scroll = new iScroll('photoDetails');
    });
};


PhotoDetails.prototype.loadData = function(data) {
    this.image.css({
        'background': 'url('+data.photo+') no-repeat',
        'background-size': 'cover'
    });
    for(var i =0; i< data.vote_details.length; i++) {
        this.details.append('<h4>'+data.vote_details[i].criteria+'<h4>');
        this.details.append('<div style="text-align: right">'+data.vote_details[i].value+' %<div>');
    }
};