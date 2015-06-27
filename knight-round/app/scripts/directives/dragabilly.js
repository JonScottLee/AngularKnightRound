'use strict';

angular
	.module('knightRoundAngularApp')
	.directive('dragabilly', function () {
		return {
			restrict: 'A', // A = attribute, E = element, C = class
			link: function(scope, elem, attrs) {
				$(elem).draggabilly({
					
				});
			}
		};
	});