hrApp.controller('Colors', ['$scope', function ($scope) {

    //TODO #1
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted"
        },
        {
            "text": "primary",
            "class": "text-primary"
        },
        {
            "text": "success",
            "class": "text-success"
        },
        {
            "text": "info",
            "class": "text-info"
        },
        {
            "text": "warning",
            "class": "text-warning"
        },
        {
            "text": "danger",
            "class": "text-danger"
        }
    ]
    $scope.selectedColor = $scope.colors[0];


    $scope.changeColor = function(){
        //TODO #3
        $scope.colorClass = $scope.selectedColor;

    }

    $scope.searchText;
    $scope.orderByText;
}]);