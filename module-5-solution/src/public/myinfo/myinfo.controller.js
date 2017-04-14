/**
 * Created by GiulioS on 13/04/2017.
 */
(function () {

    'use strict';

angular.module('public')
    .controller('MyInfoController',MyInfoController);


    MyInfoController.$inject=['myFavouriteDish','signedUp'];

    function MyInfoController(myFavouriteDish,signedUp){


        var  $ctrl=this;
        $ctrl.myFavouriteDish=myFavouriteDish;
        $ctrl.signedUp=signedUp;



    }


})();