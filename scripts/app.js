'use strict';




angular
	.module("seatReservationApp",["ngMaterial", 'ngMap', 'ui.router', 'firebase'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

	$stateProvider
			.state('classifieds', {
				url: '/classifieds',
				templateUrl: 'views/main.html',
			
				
			})

			
		$urlRouterProvider.otherwise('classifieds');
	});