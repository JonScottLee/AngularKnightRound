'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('ShopCtrl', function ($scope, $route, Shop, Inventory, Player) {

		$scope.items = Shop.items;
		$scope.showItems = false;
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
			$scope.showItems = true;
			$scope.opacity = 10;
		};

		$scope.showEquipped = function () {
			$scope.showEquipment = true;
			$scope.scale = 90;
		};

		$scope.hideEquipped = function () {
			$scope.showEquipment = false;
			$scope.scale = 100;
		};

		$scope.showShopItems = function () {
			$scope.showItems = true;
			$scope.showSellButton = false;
			$scope.showBuyButton = true;
			$scope.opacity = 10;
		};

		$scope.hideShopItems = function () {
			$scope.showItems = false;
			$scope.opacity = 100;
		}

		$scope.showShopWeapons = function () {
			$scope.items = Shop.weapons;
			$scope.showItems = true;
			$scope.showSellButton = false;
			$scope.showBuyButton = true;
			$scope.opacity = 10;
		};

		$scope.showShopArmor = function () {
			$scope.items = Shop.armor;
			$scope.showItems = true;
			$scope.showSellButton = false;
			$scope.showBuyButton = true;
			$scope.opacity = 10;
		};

	});