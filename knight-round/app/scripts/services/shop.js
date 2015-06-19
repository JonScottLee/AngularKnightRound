'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Shop', function () {

		this.items = [
			{ 'name': 'Potion' },
			{ 'name': 'Hi-Potion' },
			{ 'name': 'Phoenix Down' }
		];

	});