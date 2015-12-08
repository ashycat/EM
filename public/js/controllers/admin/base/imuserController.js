'use strict'
define(['app' ], function(app){
  'use strict';
  app.controller('admin/base/imuserController',
      ['$scope',
        function ($scope) {
          console.log('admin imuserController');

          $scope.startIMUser = function() {
            if($scope.btnIMUser === 'Stop'){
              $scope.btnIMUser = 'Start' ;
            }


          }

  }]);
});
