angular.module('zcdDirectives', [])
.controller('Controller', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  $scope.days = [[26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 1, 2, 3, 4, 5, 6]];
  $scope.showSignDialog = false;
}])
.directive('signDialog', function() {
  return {
    restrict: 'A',
    //scope: {
      //'click': '&onClick'
    //},
    templateUrl: 'sign.html',
    link: function(scope, elem) {
      console.log('elem:', elem);
      elem.on('click', function(){
        $scope.showSignDialog = true;
      })
    }
  };
});

