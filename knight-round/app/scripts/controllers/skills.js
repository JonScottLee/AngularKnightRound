'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('SkillsCtrl', function ($scope, Player) {

		$scope.skills = Player.getData().skills;
		
	});
