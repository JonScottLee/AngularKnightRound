'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Shop', function () {

		this.items = [
			{
				'name': 'Potion',
				'value': 10,
				'consumable': true,
				'type': 1,
				'strength': 10
			},
			{
				'name': 'Hi-Potion',
				'value': 50,
				'consumable': true,
				'type': 1,
				'strength': 150
			},
			{ 'name': 'Phoenix Down', 'value': 500 }
		];

	});