'use strict'
define(['app' ], function(app){
  'use strict';
  app.controller('admin/base/imuserController',
      ['$scope',
        function ($scope) {
          console.log('admin imuserController');

          $scope.initIMUser = function() {
            if(angular.isUndefined($scope.btnIMUser)){
              $scope.btnIMUser = 'Start';
            } else {
              $scope.btnIMUser = 'Stop';
            }
          }
          $scope.initIMUser();


          $scope.startIMUser = function() {
            if($scope.btnIMUser === 'Stop'){
              $scope.btnIMUser = 'Start';
            } else if($scope.btnIMUser === 'Start') {
              $scope.btnIMUser = 'Stop';
            }



          }

  }]);
});
