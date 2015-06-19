'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('InventoryCtrl', function ($scope, Inventory, Player) {

		$scope.items = Player.getData().items;

	});