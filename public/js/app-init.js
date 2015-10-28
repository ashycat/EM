// <script src="../bower_components/jquery/dist/jquery.min.js"></script>
//
// <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>
// <script src="../bower_components/raphael/raphael-min.js"></script>
// <script src="../bower_components/morrisjs/morris.min.js"></script>
// <script src="../js/morris-data.js"></script>
//
// <script src="../dist/js/sb-admin-2.js"></script>


'use strict';

(function() {
  var requirePaths = {
    'jquery' : '../bower_components/jquery/dist/jquery.min',
    'bootstrap' : '../bower_components/bootstrap/dist/js/bootstrap.min',
    // 'jquery-ui' : '../bower_components/jquery-ui/jquery-ui.min',
    'angular' : '../bower_components/angular/angular',
    'angular-ui-router' : '../bower_components/angular-ui-router/release/angular-ui-router',
    // 'angular-ui-router' : '../bower_components/angular-ui-router/release/angular-ui-router',
    // 'restangular' : '../bower_components/restangular/dist/restangular',
    // 'ngCookies' : '../bower_components/angular-cookies/angular-cookies.min',
    // 'angular-bootstrap' : '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
    // 'sb-admin-2' : '../js/sb-admin-2',
  };
console.log('requirePaths', requirePaths);
  var requireShims ={
    'jquery': { exports: '$' },
      'angular' : { exports: 'angular', deps: ['jquery'] },
      'angular-ui-router': ['angular'],
      'bootstrap' : ['jquery'],
      // 'restangular':['angular'],
      // 'app' : ['bootstrap', 'jquery', 'angular'],
      // 'angular-ui-router': ['angular'],
      // 'angular-bootstrap':['bootstrap', 'angular'],
      // 'ngCookies' : ['angular', 'angular-ui-router'],
      // 'LocalStorageModule' : ['angular'],
      // 'ngRoute' : ['angular'],
  };
console.log('requireShims', requireShims);
  require.config({
      baseUrl: '/js',
      urlArgs: 'ts=' + (new Date()).getTime(),
      paths: requirePaths,
      shim : requireShims,
      packages: ['app']
  });


  require(['jquery', 'angular' ,'app' ,'app/config'], function ($, angular, app) {

    console.log("jquery ", $);
    console.log("angular ", angular);
    console.log("app ", app);
      angular.element(document).ready(function(){
        app.init();
      });
  });
})();
