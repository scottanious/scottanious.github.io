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
        { bid: 0, trump: "", pointsInKitty: "", bidder: "", team1Score: 0, team2Score: 0, team1Sum: 0, team2Sum: 0, opposingScore: 0, class: "" },
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

    $scope.recalculateScores = function(){
        var h = $scope.curHand;
        var team1WonBid = true;
        if (h.bidder === $scope.players[0].name || h.bidder === $scope.players[2].name) { team1WonBid = true; }
        else { team1WonBid = false;}
        if (team1WonBid) {
            h.team2Score = h.opposingScore;
            if (h.opposingScore > 200 - h.bid) { h.team1Score = h.bid * -1; }
            else { h.team1Score = 200 - h.opposingScore; }
        } else {
            h.team1Score = h.opposingScore;
            if (h.opposingScore > 200 - h.bid) { h.team2Score = h.bid * -1; }
            else { h.team2Score = 200 - h.opposingScore; }
        }
        $scope.recalculateSums();
    };
  
    $scope.recalculateSums = function() {
        for (i = 0; i < $scope.hands.length; i++) {
            var previousSumTeam1 = 0;
            var previousSumTeam2 = 0;
            if (i > 0) {
                previousSumTeam1 = $scope.hands[i - 1].team1Sum;
                previousSumTeam2 = $scope.hands[i - 1].team2Sum;
            }
            $scope.hands[i].team1Sum = parseInt(previousSumTeam1) + parseInt($scope.hands[i].team1Score);
            $scope.hands[i].team2Sum = parseInt(previousSumTeam2) + parseInt($scope.hands[i].team2Score);
        }
    }

    $scope.setCurrentHand($scope.hands[0]);
};