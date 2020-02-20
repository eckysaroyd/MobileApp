var app = angular.module('starter.controllers', []);

app.controller('CalcCtrl', function($scope) {
  var num1 = "";
  var num2 = "";
  var op = "";
  $scope.result = "0";
  $scope.sendInput = function (input) {
    if(op == '='){
      num1="";
      op="";
    }
    if (!op) {
      num1 += input;
      $scope.result = num1;
    }
    else {
      num2 += input;
      $scope.result = num2;
    }
  };
  $scope.handleDot = function () {
    if ($scope.result.toString().indexOf('.')<0)
      $scope.sendInput('.');
  };
  $scope.operate = function (input) {
    if(!op || op=='=')
      op = input;
    if(op && num1 && num2) {
      $scope.calculate(input);
    }
  };
  $scope.calculate = function (input) {
    var opid = 0;
    switch (op) {
      case "+":
        $scope.result = num1 * 1 +  num2 * 1;
        opid = 0;
        break;
      case "-":
        $scope.result = num1 * 1 - num2 * 1;
        opid = 1;
        break;
      case "x":
        $scope.result = num1 * num2;
        opid = 2;
        break;
      case "/":
        $scope.result = num1 / num2;
        opid = 3;
        break;
    }

    saveToDb({
      "equation": num1 + " " + op + " " + num2 + " = " + $scope.result,
      "date": new Date().toLocaleString(),
      "imageid": opid
    });

    num1 = $scope.result;
    op = input;
    num2 = "";


  };

  $scope.clear = function () {
    num1 = num2 = op = "";
    $scope.result = 0;
  };


});

app.directive('numPad', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      val: '@',
      calc: '='
    },
    link: function (scope, elem, attrs) {
      scope.sendInput = function (input) {
       // alert(scope.test);
        scope.calc(input);
      }
    },
    template: '<button  class="col button" ng-click="sendInput(val)">{{val}}</button>'
  }
});



app.controller('HistoryCtrl', function($scope, $stateParams) {

  $scope.items = {};
  firebase.database().ref("/history").on('value',function (snapshot) {
     $scope.items = snapshot.val();
    if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
      $scope.$apply();
    }
  });

  $scope.removeItem = function (id) {
    firebase.database().ref("/history/"+id).remove();
  };

});


app.controller('AboutCtrl', function($scope, $stateParams) {

});

