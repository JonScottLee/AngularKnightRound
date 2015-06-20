'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Player', function () {

		this.generatePlayer = function () {
			var krPlayer = {};

			krPlayer.name = 'Jon';
			krPlayer.HP = 95;
			krPlayer.items = [];
			krPlayer.gold = 0;
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

		/* Inventory Methods */
		this.removeItem = function (item, idx, sell) {
			var currentPlayer = this.getData();
			currentPlayer.items.splice(idx, 1);

			if (sell === 'sell') {
				currentPlayer.gold += Math.ceil(item.value / 1.5);
			}

			this.savePlayer(currentPlayer);
		}

		this.addItem = function (item) {
			var currentPlayer = this.getData();
			currentPlayer.items.push(item);
			this.savePlayer(currentPlayer);
		};
		/* End Inventory Methods */

	});