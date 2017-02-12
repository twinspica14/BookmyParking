(function(){

	"use strict";

	angular
		.module("seatReservationApp")
		.factory("classifiedsFactoryCAR", function($http, $firebaseArray){

			var ref= new Firebase('https://carid-a6fc4.firebaseio.com/');
							
			return{
			ref: $firebaseArray(ref)
			//console.log('added record with id' + id);

					}
		});
})();