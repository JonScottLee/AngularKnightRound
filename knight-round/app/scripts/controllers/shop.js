'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('ShopCtrl', function ($scope, Shop) {

		$scope.generateShopItems = function () {
			console.info('generate shop items');
		};

		$scope.showShopItems = function () {
			console.info('show the shop\'s items');
		};

		$scope.showPlayerItems = function () {
			console.info('show the player\'s items');
		};

		$scope.items = Shop.items;

	});