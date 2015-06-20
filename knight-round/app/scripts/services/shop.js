'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Shop', function () {

		this.items = [
			{
				'name': 'Potion',
				'value': 10,
				'conumable': true,
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

		this.weapons = [
			{
				'name': 'Copper Sword',
				'value': 120,
				'consumable': false,
				'wearable': true,
				'dmg': 12
			}
		];

		this.armor = [
			{
				'name': 'Leather Armor',
				'value': 240,
				'consumable': false,
				'wearable': true,
				'def': 20
			}
		];

	});