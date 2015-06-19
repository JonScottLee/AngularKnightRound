'use strict';

angular
    .module('knightRoundAngularApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider

        // Main Screen
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })

        // Fight
        .when('/fight', {
            templateUrl: 'views/fight.html',
            controller: 'FightCtrl'
        })

        // Inventory
        .when('/inventory', {
            templateUrl: 'views/inventory.html',
            controller: 'InventoryCtrl'
        })

        // Shop
        .when('/shop', {
            templateUrl: 'views/shop.html',
            controller: 'ShopCtrl'
        })

        // Skills
        .when('/skills', {
            templateUrl: 'views/skills.html',
            controller: 'SkillsCtrl'
        })

        // Options
        // Skills
        .when('/options', {
            templateUrl: 'views/options.html',
            controller: 'OptionsCtrl'
        })
        
        // Redirect
        .otherwise({
            redirectTo: '/'
        });
  });
