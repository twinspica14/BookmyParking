'use strict';

/**
 * @ngdoc function
 * @name seatReservationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seatReservationApp
 */
angular.module('seatReservationApp')
    .controller('MainCtrl', function ($scope,classifiedsFactoryCAR, $log, $state, $http,$mdSidenav,$mdToast,$mdDialog, NgMap){
 
        $scope.CARID = classifiedsFactoryCAR.ref;

      
       $scope.CARID.$loaded().then(function(CARID){
        $scope.seat=getcategories($scope.CARID)
       });


 $scope.p1 = {};       
$scope.p1.time = {};
$scope.clo = function()
{

  $scope.p1={};
    $scope.seats.length = 0;
}


 $scope.saveobjects1=function(p1){
  var timestamp = new Date().valueOf();
  $scope.p1.id = timestamp;
  $scope.p1.status="registered";
     if(p1){

    
     $scope.CARID.push(p1);
     $scope.CARID.$add(p1);
     $scope.p1={};
    $scope.seats.length = 0;
     $scope.clo();
 }
}


$scope.naviR=function(){
     $mdSidenav('right').open();


 }
 $scope.cloR=function(){
     $mdSidenav('right').close();
     
 }

  
        // Init layout
    $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];

        // Set reserved and selected
         
         var lol =  [];
         var reserved=[];
         $scope.seats = [];
        var selected = [];

        // seat onClick
        $scope.seatClicked = function(seatPos) {
            
            var index = selected.indexOf(seatPos);
            if(index != -1) {
                // seat already selected, remove
                selected.splice(index, 1)
              console.log("unSelected Seat: " + seatPos);
              $scope.p1.status={};

            } else {
                // new seat, push
                selected.push(seatPos);
                console.log("Selected Seat: " + seatPos);
                $scope.p1.status="pending";
            }
        }

       // clear selected
        $scope.clearSelected = function() {
            selected = [];
            lol = [];
        }


 
        // get seat status
        $scope.getStatus = function(seatPos) {
         var arreyM = [];
 for (var i = 0; i < $scope.CARID.length; i++) {
      arreyM[i]= $scope.CARID[i].seats;
     
 }

            if(arreyM.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        }


        $scope.showSelected = function() {
            if(selected.length > 0) {
                alert("Selected Seats: \n" + selected);
                lol.push(selected);
            } else {
                alert("No seats selected!");
            }
        }

        $scope.seatlol = function(seatPos) {

           
                // seat already selected, remove
                
                console.log("reserved Seat: " + lol[0]);
                $scope.seats.push(lol);
                
        }

          


function getcategories(points){
    var categories = [];
    angular.forEach(points, function(item) //forEach is inbuilt angular function
    {
        angular.forEach(item.categories, function(category){
            categories.push(category);


        });
    });
    return _.uniq(categories);
}

   
    })
    ;
