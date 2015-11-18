angular.module('message', [])

.controller('messageCtrl', function($scope, $http) {
  $scope.message = '';
  $scope.sendMessage = function () {
    console.log($scope.message)
    return $http({
      method: 'POST',
      url: '/api/sendMsg',
      data: {
        message: $scope.message
      }
    })
    .then(function (resp) {
      $scope.message = '';
      return resp;
    });
  }
});
