

$.fn.expanding_area = (function() {
    var template = "<pre><span></span><br/></pre>";

    return function() {
        return this.each(function() {
            var area = $(this);
            area.wrap('<div class="expanding_area" />');
            area.before(template);

            var container = area.parent(),
                span = container.find('span');

            area.bind('input', function() {
                span.text(area.val());
            });

            container.addClass('active');
        });
    };
})();
