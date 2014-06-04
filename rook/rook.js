angular.module('rook', ['ui.bootstrap']);
var RookGame = function ($scope) {

  $scope.players = [
      { name: "John" },
      { name: "Paul" },
      { name: "George" },
      { name: "Ringo" }
    ];
  $scope.suits = [{name: "Red"}, {name: "Yellow"}, {name: "Black"}, {name: "Green"}];
  $scope.hands = [
      { bid: 150, trump: "Red", pointsInKitty: "Yes", bidder: "George", team1Sum: 0, team2Sum: 0, class: ""},
      { bid: 135, trump: "Yellow", pointsInKitty: "No", bidder: "Ringo", team1Sum: 160, team2Sum: 40, class: ""}
    ];
  $scope.curHand = $scope.hands[0];
  
  $scope.setCurrentHand = function(hand){
    $scope.curHand.class = "";
    $scope.curHand = hand;
    $scope.curHand.class = "warning";
  };

  $scope.newHand = function() {
      $scope.hands.push({ bid: "", trump: "", pointsInKitty: "", bidder: "", team1Sum: 0, team2Sum: 0, class: ""});
      var hand = $scope.hands[$scope.hands.length-1];
      $scope.setCurrentHand(hand);
  };
  $scope.setCurrentHand($scope.hands[0]);
};