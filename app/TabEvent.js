(function($) {
    $.fn.tab = function(fn) {
        var _this = $(this);
        _this.data('scrolling', false);
        _this.on('touchmove', function(e) {
            _this.data('scrolling', true);
        });
        
        _this.on('touchend', function(e) {
            if(_this.data('scrolling')) {
                _this.data('scrolling', false);
                return false;
            }
            
            _this.addClass('active');
            setTimeout(function(){
                _this.removeClass('active');
                fn.call(_this.get(0), e);
            }, 40);
            
            return true;
        });
    };
})($);