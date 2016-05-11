var indexApp = angular.module('indexApp', ["ui.router"]);
indexApp.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "home.html",
    controller: function($scope) {
      $scope.showSignModal = false;
      $scope.openSignModal = function() {
        $scope.showSignModal = true;
      }
      $scope.close = function() {
        $scope.showSignModal = false;
      }
      $scope.weekdays = ['日', '一', '二', '三', '四', '五', '六'];
      $scope.days = [[26, 27, 28, 29, 30, 31, 1],
        [2, 3, 4, 5, 6, 7, 8],
        [9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22],
        [23, 24, 25, 26, 27, 28, 29],
        [30, 1, 2, 3, 4, 5, 6]];
    }
  })
})
