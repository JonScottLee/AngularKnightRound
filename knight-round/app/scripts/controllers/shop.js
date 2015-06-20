'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('ShopCtrl', function ($scope, $route, Shop, Inventory, Player) {

		$scope.items = Shop.items;
		$scope.showBuyButton = true;

		$scope.buyItem = function () {
			Player.addItem(this.item);
		};

		$scope.showPlayerItems = function () {
			$scope.items = Player.getData().items;
			$scope.showSellButton = true;
			$scope.showBuyButton = false;
		};

		$scope.showShopItems = function () {
			$scope.items = Shop.items;
			$scope.showSellButton = false;
			$scope.showBuyButton = true;
		};

	});