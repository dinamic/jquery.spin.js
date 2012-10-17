(function($){
    $.fn.spin = function(opts) {
        this.each(function() {
            var $this = $(this),
                data = $this.data();

            if (data.spinner) {
                data.spinner.stop();
                delete data.spinner;
            }
            if (opts !== false) {
                data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
            }
        });
        return this;
    };
    
    $.fn.spinBlock = function(opts) {
        this.each(function() {
            var $this = $(this);
            var container = $this;
            var data = container.data();
            
            if (container.parents('.ui-dialog').length > 0) {
                container = $(container.parents('.ui-dialog')[0]);
                data = container.data();
            }
            
            if (!data.spinBlocker) {
                data.spinBlocker = $('<div class="spinblocker"></div>');
                data.spinBlocker.appendTo(container.parents('body'));
            }
            
            data.spinBlocker.css({
                position: 'absolute',
                zIndex: 9999,
                top: container.offset().top + 'px',
                left: container.offset().left + 'px',
                width: container.outerWidth() + 'px',
                height: container.outerHeight() + 'px'
            });

            data.spinBlocker.show(opts);
            data.spinBlocker.spin();
        });
        
        return this;
    };
    
    $.fn.spinUnblock = function(opts) {
        this.each(function() {
            var $this = $(this);
            var container = $this;
            var data = container.data();
            
            if (container.parents('.ui-dialog').length > 0) {
                container = $(container.parents('.ui-dialog')[0]);
                data = container.data();
            }
                
            if (!data.spinBlocker) {
                return this;
            }
            
            data.spinBlocker.data().spinner.stop();
            data.spinBlocker.hide();
        });
        
        return this;
    };
})(jQuery);