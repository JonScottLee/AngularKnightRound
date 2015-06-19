'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Inventory', function (Player) {
		this.inventory = [];

		this.getInventory = function () {
			return this.inventory;
		}

		this.add = function (item) {
			this.inventory.push(item);
			Player.updateInventory(this.inventory);
		}

	});