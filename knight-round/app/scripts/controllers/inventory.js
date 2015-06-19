'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('InventoryCtrl', function ($scope, $route, Inventory, Player) {

		$scope.dropItem = function () {
			Player.removeItem(this.item, this.$index);
			$route.reload();
		};

		$scope.items = Player.getData().items;

	});