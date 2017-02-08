angular.module('friendsList').controller('mainCtrl', function($scope){
    
    $scope.friends = ['Chris', 'Ricky', 'Justin', 'Dillon'];

    $scope.addFriend = function(name){
        friends.push(name);
    }

});