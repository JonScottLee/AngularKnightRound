'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('MainCtrl', function ($scope, Fight, Player) {

		$scope.setUpFight = function () {
			Fight.generateMonster();
		};

		$scope.playerHP = Player.getData().HP;

	});
