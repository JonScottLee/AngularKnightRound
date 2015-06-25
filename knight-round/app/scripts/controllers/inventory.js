'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('InventoryCtrl', function ($scope, $route, Inventory, Player) {

		$scope.items = Player.getData().items;
		$scope.showEquipment = false;

		$scope.dropItem = function () {
			Player.removeItem(this.item, this.$index);
			$scope.items = Player.getData().items;
		};

		$scope.showEquipped = function () {
			$scope.showEquipment = true;
			$scope.scale = 90;
		};

		$scope.hideEquipped = function () {
			$scope.showEquipment = false;
			$scope.scale = 100;
		};

	});