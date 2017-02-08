angular.module('friendsList').controller('mainCtrl', function($scope){
    
    $scope.friends = ['Chris', 'Ricky', 'Justin', 'Dillon'];

    $scope.addFriend = function(name){
        
        var person = {
            name: name
        }; 
        $scope.friends.push(person); 
    }

});

