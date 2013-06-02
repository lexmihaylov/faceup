var Activity = function (id){
    this.dom = $(id);
};

Activity.prototype.show = function() {
    for(var i in FaceUp.Activity) {
        FaceUp.Activity[i].hide();
    }
    this.dom.removeClass('hidden');
    this.dom.addClass('active');
};

Activity.prototype.hide = function() {
    this.dom.removeClass('active');
    this.dom.addClass('hidden');
};