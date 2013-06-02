$.fn.tab = function(fn) {
    $(this).on('touchend', function(e) {
        var _this = $(this);
        _this.addClass('active');
        setTimeout(function(){
            _this.removeClass('active');
            fn.call(_this.get(0), e);
        }, 40);
    })
};