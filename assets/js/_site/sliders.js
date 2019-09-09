const $ = jQuery.noConflict();

'use strict';
const Sliders = {
	/*-------------------------------------------------------------------------------
		# Cache dom and strings
	-------------------------------------------------------------------------------*/
	$domSlider: $('.js-slider'),
	$domArrowLeft: $('.js-arrow-left'),
	$domArrowRight: $('.js-arrow-right'),

	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {

		// gallery slider
		this.$domSlider.slick({
			slidesToShow: 3,
			nextArrow: Sliders.$domArrowRight,
			prevArrow: Sliders.$domArrowLeft,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}
};

export default Sliders;
