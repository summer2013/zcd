var dropDownMenu = angular.module('dropDownMenuApp', []);

dropDownMenu.controller('DropDownMenuController', ['$scope', function($scope) {
  $scope.subMenus1 = [{'name': '全部', 'children': [{'name': '全部'}]},
    {'name': '实物礼品', 'children': [{'name': '全部'}, {'name': '品牌热销'}]},
    {'name': '电子卡券', 'children': [{'name': '全部'}, {'name': '搜狐视频'},
      {'name': '神州专车'},
      {'name': '滴滴出行'},
      {'name': '滴滴出行'},
      {'name': '测试专用'}]},
    {'name': '淘宝优惠', 'children': [{'name': '全部'}]}];
  $scope.subMenus2 =  [{'name':'兑换次数从高到低'},
    {'name':'会员积分总动员从低到高'},
    {'name':'会员积分总动员从高到低'}];

  $scope.showList = false;
  $scope.headerActive = false;
  $scope.switchList = function() {
    $scope.showList = !$scope.showList;
    $scope.headerActive = !$scope.headerActive;
    $scope.showExchangeList = false;
    $scope.exchangeActive = false;
    $scope.mineExchangeActive = false;
  }

  $scope.showExchangeList = false;
  $scope.exchangeActive = false;
  $scope.switchExchangeList = function() {
    $scope.showExchangeList = !$scope.showExchangeList;
    $scope.exchangeActive = !$scope.exchangeActive;
    $scope.showList = false;
    $scope.headerActive = false;
    $scope.mineExchangeActive = false;
  }

  $scope.mineExchangeActive = false;
  $scope.switchMineExchange = function() {
    $scope.mineExchangeActive = !$scope.mineExchangeActive;
    $scope.showList = false;
    $scope.headerActive = false;
    $scope.showExchangeList = false;
    $scope.exchangeActive = false;
  }
}])
.directive('dropDownMenu', function(){
  return {
    restrict: 'E',
    templateUrl: 'compent/drop-down-menu/drop-down-menu.html',
    controller:  'DropDownMenuController'
  }
});
