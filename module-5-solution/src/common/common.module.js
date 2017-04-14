(function() {
"use strict";

angular.module('common', [])
    .constant('ApiPath', 'https://gipuntoesse-course-spa.herokuapp.com')
    .config(config);

   /*  .constant('MyApiPath', 'https://gipuntoesse-course-spa.herokuapp.com')
   https://ychaikin-course5.herokuapp.com*/

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
