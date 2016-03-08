(function(){
    'use strict';

    angular
	.module('main')
	.directive('ngmain',ngmain)
	.config(function($stateProvider,$urlRouterProvider){   
	    
	    $urlRouterProvider.otherwise("/login");

	    $stateProvider

		.state('login',{
		    url: '/login',
		    controller: function(authService){
			authService.user.authenticated = false;
		    }
		})
		.state('calculator',{
		    url: '/calculator',
		    controller: function(authService,mainService,$state){
			if(!authService.user.authenticated){			    			
			    $state.transitionTo('login', {})
			}
			
		    }
		})
		.state('logout',{
		    url: '/logout',
		    controller: function(authService,$state){	
			authService.logout();
			$state.transitionTo('login', {})
		    }
		});

	});
   
    ngmain.$inject = ['mainService','authService','$state'];

    function ngmain(mainService,authService){
	
	var directive = {
	    link:link,
	    templateUrl: 'app/main/views/main.html'
	};

	return directive;

	function link(scope,element,attrs){
	    scope.mainService = mainService;
	    scope.authService = authService;
	    mainService.startChronometer();

	}
    }
	    
})();
