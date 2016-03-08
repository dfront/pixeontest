/**
 * Auth Directive
 * @namespace Directives
 */
(function(){
    'use strict';
    
    angular
		.module('auth')
		.directive('ngauth',ngauth);

    ngauth.$inject = ['authService'];

    function ngauth(authService){
    	
		var directive = {
		    link:link,
		    templateUrl: '/app/auth/views/auth.html'
		};
	
		return directive;
		
		function link(scope,elements,attrs){
		    scope.authService = authService;
		}    
	 
    }

})();
