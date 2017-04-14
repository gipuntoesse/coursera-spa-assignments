(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
service.pref={};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getMyInfo =function() {
    return service.pref;
  };


  service.uploadFavouriteMenuItems = function (shortName) {

    service.pref={};

    var config = {};


    var message="";
    var category="";
    if (shortName) {

      category=shortName.match(/[a-zA-Z]+/g).toString();
      if (category) {

        config.params = {'category': category.toUpperCase()};
      }

    }
    return $http.get(ApiPath + '/menu_items.json', config)
        .then(function (response) {


          if (shortName) {
            var myinfo = response.data.menu_items.filter(function(item) { return item.short_name === shortName.toUpperCase(); });

            if (myinfo.length === 0)
            {
              message="No such menu number exists";
              return message;
            }
            else {
              service.pref=myinfo[0];
              message="Your information has been saved";
              return message;
            }


          }
          else {

            message="No such menu number exists";
            return message;

          }


    }).catch(function (error) {

          message="No such menu number exists";

        }).finally(function(){

return message;
        });
  };


  service.getSignedUp=function(){

    if (Object.getOwnPropertyNames(service.pref).length === 0){


      return false;
    }
    else {
      return true;
    }

  };

}



})();
