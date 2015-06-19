'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Fight', function () {
		this.monster = {};

		this.generateMonster = function () {
			console.info('generate monster');
		};
	});