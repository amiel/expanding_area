
$.fn.expanding_area = (function() {
    var template = "<pre><span></span><br/></pre>";

    var update_fn = function(area, span) {
        return function() {
            span.text(area.val());
        };
    };

    return function() {
        return this.each(function() {
            var area = $(this);
            area.wrap('<div class="expanding_area" />');
            area.before(template);

            var container = area.parent();
            var span = container.find('span');
            var updater = update_fn(area, span);

            area.bind('input', updater);
            updater();

            container.addClass('active');
        });
    };
})();
