'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('InventoryCtrl', function ($scope, $route, Inventory, Player) {

		$scope.items = Player.getData().items;

		$scope.dropItem = function () {
			Player.removeItem(this.item, this.$index);
			$scope.items = Player.getData().items;
		};

	});