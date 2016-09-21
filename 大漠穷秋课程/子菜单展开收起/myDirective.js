/**
 * Created by admin on 2016/9/21.
 */
var lists = ['apple','sumsoun','nokia'];
var appEx = angular.module('appEx',[]);
appEx.directive('expandedMenu', function(){
    return{
        restrict: 'EA',
        replace: true,
        templateUrl:'./views/submenu.html',
        transclude: true,
        link:function(scope,element,attr){
            scope.toggle=function(){
                scope.ifShow = !scope.ifShow;
                scope.text = scope.ifShow ? 'click packup':'click expanding';
            }
        }
    }
});
appEx.controller('appEx', ['$scope',function($scope){
    $scope.text = 'click expanding';
    $scope.lists = lists;
}]);

/*
var lists = ['����','���','��ױ','����','��װ'];
var subMenu = angular.module('SubMenu',[]);
subMenu.directive('expender',function(){
    return {
        restrict:"EA",
        replace:true,
        templateUrl:'./views/submenu.html',
        transclude:true,
        link:function(scope,element,attr){
            scope.toggle=function(){
                scope.ifShow = !scope.ifShow;
                scope.text = scope.ifShow ? '�������' :'���չ��';
            }
        }
    }
});
subMenu.controller('submenu',['$scope',function($scope){
    $scope.text = '���չ��';
    $scope.lists = lists;
}]);*/
