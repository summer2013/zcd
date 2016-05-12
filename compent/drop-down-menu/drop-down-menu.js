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
  $scope.subMenus2 =  ['兑换次数从高到低', '会员积分总动员从低到高', '会员积分总动员从高到低'];

  $scope.showList = false;
  $scope.switchMenu = function() {
    $scope.showList = !$scope.showList;
  }

}]);
