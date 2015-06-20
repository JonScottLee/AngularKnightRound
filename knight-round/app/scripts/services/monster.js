'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Monster', function (Player) {
		var krMonster = {};

		krMonster.name = 'Green Slime';
		krMonster.maxHP = 20;
		krMonster.currentHP = 20;
		krMonster.DMG = 2;

		this.getData = function () {
			return krMonster;
		};

		this.takeDamage = function () {
			var playerDMG = Player.getData().DMG;
			krMonster.currentHP -= playerDMG;
		};
	});