var Activity = function (id){
    this.dom = $(id);
};

Activity.prototype.show = function() {
    $(this.dom).addClass('active');
};

Activity.prototype.hide = function() {
    $(this.dom).removeClass('active');
};