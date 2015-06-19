'use strict';

angular
	.module('knightRoundAngularApp')
	.service('Movies', function ($http, $q) {

		var API = 'http://knightRoundAngularApp-api.herokuapp.com';

		this.movies = [];

		function loadMovies () {
			var deferred = $q.defer();

			$http.get(API + '/randomMovies')
			.then(function (res) {
				deferred.resolve(res.data);
			});

			return deferred.promise;
		}

		this.getMovie = function () {
			var deferred = $q.defer(),
				service = this;

			if (service.movies.length > 3) {
				deferred.resolve(service.movies.shift());
			} else if (service.movies.length) {
				deferred.resolve(service.movies.shift());
				loadMovies()
				.then(function (data) {
					service.movies = service.movies.concat(data);
				});
			} else {
				loadMovies()
				.then(function (data) {
					service.movies = service.movies.concat(data);
					deferred.resolve(service.movies.shift());
				});
			}

			return deferred.promise;
		};
});