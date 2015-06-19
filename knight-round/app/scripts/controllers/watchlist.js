'use strict';

angular
	.module('knightRoundAngularApp')
	.controller('WatchlistCtrl', function ($scope, Watchlist) {

		Watchlist.load();

		$scope.watchlist = Watchlist.movies;

		$scope.remove = function (movie) {
			Watchlist.delete(movie);
		};

});