/**
 * Created by gipuntoesse on 17/03/2017.
 */
(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];


    function LunchCheckController($scope) {


        $scope.displayIt = function () {


            if (($scope.list !== undefined) && $scope.list.length > 0) {

                //remove empty items between not empty item
                var pattern = new RegExp("(\\,[\\,\\s]*\\,)", "g");
                var inputFiltered = $scope.list.replace(pattern, ",");

                //remove empty items at the beginning
                var pattern2 = new RegExp("^([\\,\\s]+)", "g");
                var inputFiltered2 = inputFiltered.replace(pattern2, "");

                //remove empty items at the end
                var pattern3 = new RegExp("([\\,\\s]+)$", "g");
                var inputFiltered3 = inputFiltered2.replace(pattern3, "");


                var arrayOfItems = inputFiltered3.split(",");

                //check if, after the filter, the array contains only an empty element
                if (arrayOfItems.length == 1 && arrayOfItems[0].length==0) {
                    $scope.message = "Please enter data first";
                    $scope.messageStyle = {

                        "color": "red",
                        "border": "1px solid red"

                    }
                }
                else {
                    if (arrayOfItems.length <= 3) {
                        $scope.message = "Enjoy!"
                    }
                    else {
                        $scope.message = "Too much!";
                    }

                    $scope.messageStyle = {

                        'color': 'green',
                        'border': '1px solid green'
                    }
                }

            }
            else {
                $scope.message = "Please enter data first";
                $scope.messageStyle = {

                    "color": "red",
                    "border": "1px solid red"

                }

            }


        }
    }

})();
