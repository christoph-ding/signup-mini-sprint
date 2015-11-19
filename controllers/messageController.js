angular.module('message', [])

.controller('messageCtrl', function($scope, $http) {
  $scope.message = '';
  $scope.allMessages = [];

  $scope.sendMessage = function () {
    return $http({
      method: 'POST',
      url: '/api/Msg',
      data: {
        message: $scope.message
      }
    })
    .then(function (resp) {
      $scope.message = '';
      return resp;
    });
  }

  $scope.getMessages = function () {
    return $http({
      method: 'GET',
      url: '/api/Msg'
    })
    .then(function (returned) {
      console.log(returned.data);
      $scope.allMessages = returned;
    })
  }
});
