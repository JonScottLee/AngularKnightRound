'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('FightCtrl', function ($scope, Player) {
		var krPlayer = Player.getData();

		$scope.playerName = krPlayer.name;
		$scope.playerHP = krPlayer.HP;
		$scope.monsterHP = 60;
	});