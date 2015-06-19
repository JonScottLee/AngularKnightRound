'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('MainCtrl', function ($scope, $route, Fight, Player) {

		$scope.setUpFight = function () {
			Fight.generateMonster();
		};

		$scope.playerName = Player.getData().name;
		$scope.playerHP = Player.getData().HP;

	});
