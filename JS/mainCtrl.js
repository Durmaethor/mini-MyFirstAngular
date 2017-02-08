angular.module('friendsList').controller('mainCtrl', function($scope){
    
    $scope.friends = ['Chris', 'Ricky', 'Justin', 'Dillon'];

    $scope.addFriend = function(name){
        $scope.friends.push($scope.newName); 
    }

});

