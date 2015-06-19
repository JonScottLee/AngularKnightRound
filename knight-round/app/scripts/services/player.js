'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Player', function () {

		this.generatePlayer = function () {
			var krPlayer = {};

			krPlayer.name = 'Jon';
			krPlayer.HP = 95;
			krPlayer.items = [
				{ 'name': 'Mithglin Rapier' },
				{ 'name': 'Jade-Studded Augmented Chain Armor' },
				{ 'name': 'Coat of Midnight' }
			];
			krPlayer.skills = [
				{ 'name': 'Rage' },
				{ 'name': 'Unstable' },
				{ 'name': 'Dominate' }
			];

			this.savePlayer(krPlayer);
		};

		this.getData = function () {
			if (!this.playerExists()) {
				this.generatePlayer();
			}

			return JSON.parse(localStorage.getItem('knightRoundPlayer'));
		};

		this.savePlayer = function (krPlayer) {
			localStorage.setItem('knightRoundPlayer', JSON.stringify(krPlayer));
		};

		this.deletePlayer = function () {
			localStorage.removeItem('knightRoundPlayer');
		};

		this.newPlayer = function () {
			this.deletePlayer();
			this.generatePlayer();
		};

		this.playerExists = function () {
			return localStorage.getItem('knightRoundPlayer') !== null;
		};

	});