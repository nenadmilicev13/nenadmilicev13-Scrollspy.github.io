const $ = jQuery.noConflict();

'use strict';
const ScrollSpy = {

	/*-------------------------------------------------------------------------------
		# Initialize
    -------------------------------------------------------------------------------*/
    init: function () {
        function secInView(section, sectionNav) {
            var $window = $(window);
            var activeClass = 'is-active';

            section.each(function(index) {
                var sectionTop = section.eq(index).offset().top;
                var $currentSecNav = sectionNav.eq(index);

                $window.on('scroll', function() {
                    if ( $(this).scrollTop() >= sectionTop - 200 ) {
                        sectionNav.not($currentSecNav).removeClass(activeClass);
                        $currentSecNav.addClass(activeClass);
                    }
                });

                $currentSecNav.on('click', function() {
                    $('html, body').animate({ scrollTop: sectionTop }, 600);
                });
            });

            $window.trigger('scroll');
        }

        secInView($('[data-section]'), $('[data-nav-item]'));
	}
};

export default ScrollSpy;
