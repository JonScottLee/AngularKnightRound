'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('OptionsCtrl', function ($scope, Player) {

		$scope.deletePlayer = function () {
			Player.deletePlayer();
		};

		$scope.newPlayer = function () {
			Player.newPlayer();
		};

		$scope.generatePlayer = function () {
			Player.generatePlayer();
		};

	});