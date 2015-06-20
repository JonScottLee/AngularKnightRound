'use strict';

angular
	.module('knightRoundAngularApp')
	.directive('circleProgress', function (Player) {
		return {
			restrict: 'AE', // A = attribute, E = element, C = class
			replace: false,
			link: function(scope, elem, attrs) {
				$(elem).circleProgress({
					startAngle: -45.6,
					animationStartValue: attrs.start || 0,
					size: attrs.size || 200,
					thickness: Math.abs(attrs.size / attrs.thickness) || 'auto',
					reverse: attrs.reverse || false,
					value: attrs.value,
					animation: {
						duration: Math.abs(attrs.duration),
						easing: attrs.easing || 'linear'
					},
					fill: {
						gradient: [attrs.color1, attrs.color2]
					},
				})
				.on('circle-animation-progress', function(event, progress, stepValue) {
					var $hpEl = $(this).find('.progress__hp');

					console.info(stepValue, $(this).attr('data-numbertotal'));

					if ($hpEl.length) {
						$hpEl.text(Math.floor(stepValue.toFixed(2) * $(this).attr('data-numbertotal')));
					}
				});
			}
		};
	});
