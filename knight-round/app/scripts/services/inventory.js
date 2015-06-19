'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Inventory', function () {
		this.inventory = [];

		// function loadInventory () {
		// 	console.info('load inventory');
		// }

		this.setDummyInv = function () {
			console.info('save dummy inventory');
		};

		this.getDummyInv = function () {
			console.info('get dummy inventory');
		};

	});