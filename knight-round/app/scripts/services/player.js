'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Player', function () {

		this.generatePlayer = function () {
			var krPlayer = {};

			krPlayer.name = 'Jon';
			krPlayer.HP = 60;
			krPlayer.DMG = 10;
			krPlayer.items = [];
			krPlayer.gold = 1000;
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

		/*-------------------*/
		/* Inventory Methods */
		/*-------------------*/
		this.removeItem = function (item, idx, sell) {
			var currentPlayer = this.getData();
			currentPlayer.items.splice(idx, 1);

			if (sell === 'sell') {
				currentPlayer.gold += Math.ceil(item.value / 1.5);
			}

			this.savePlayer(currentPlayer);
		};

		this.addItem = function (item, buy) {
			var currentPlayer = this.getData();
			currentPlayer.items.push(item);

			if (buy === 'buy') {
				currentPlayer.gold -= item.value;
			}

			this.savePlayer(currentPlayer);
		};
		/*-----------------------*/
		/* End Inventory Methods */
		/*-----------------------*/

	});