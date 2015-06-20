'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Shop', function () {

		this.items = [
			{ 'name': 'Potion', 'value': 10 },
			{ 'name': 'Hi-Potion', 'value': 50},
			{ 'name': 'Phoenix Down', 'value': 500 }
		];

	});