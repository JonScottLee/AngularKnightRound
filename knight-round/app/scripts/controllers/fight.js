'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('FightCtrl', function ($scope, $route, Player, Monster) {
		var krPlayer = Player.getData();

		// Player vars
		$scope.playerName = krPlayer.name;
		$scope.playerHP = krPlayer.HP;
		$scope.items = Player.getData().items;
		
		// Monster vars
		$scope.monsterName = Monster.getData().name;
		$scope.monsterMaxHP = Monster.getData().maxHP;
		$scope.monsterCurrentHP = Monster.getData().currentHP;

		$scope.attackEnemy = function () {
			var $monsterHPEl = $('.module--enemy').find('[circle-progress]');
			
			Monster.takeDamage();
			$monsterHPEl.circleProgress('value', Monster.getData().currentHP / Monster.getData().maxHP);
			$scope.monsterCurrentHP = Monster.getData().currentHP;
		};
	});