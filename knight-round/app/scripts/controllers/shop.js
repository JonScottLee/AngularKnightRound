'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('ShopCtrl', function ($scope, $route, Shop, Inventory, Player) {

		$scope.items = Shop.items;
		$scope.showBuyButton = true;
		$scope.playerGold = Player.getData().gold;
		$scope.sellRatio = 1.5;
		$scope.shopView = 'Buy';
		$scope.Math = window.Math;

		$scope.buyItem = function () {
			Player.addItem(this.item, 'buy');
			$scope.playerGold = Player.getData().gold;
			$route.reload();
		};

		$scope.sellItem = function () {
			Player.removeItem(this.item, this.$index, 'sell');
			$scope.items  = Player.getData().items;
			$scope.playerGold = Player.getData().gold;
		};

		$scope.showPlayerItems = function () {
			$scope.items = Player.getData().items;
			$scope.showSellButton = true;
			$scope.showBuyButton = false;
			$scope.shopView = 'Sell';
		};

		$scope.showShopItems = function () {
			$scope.items = Shop.items;
			$scope.showSellButton = false;
			$scope.showBuyButton = true;
			$scope.shopView = 'Buy';
		};

		$scope.showItems = function () {
			$scope.items = Shop.items;
		};

		$scope.showWeapons = function () {
			$scope.items = Shop.weapons;
		};

		$scope.showArmor = function () {
			$scope.items = Shop.armor;
		};

	});