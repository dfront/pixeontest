/**
 * Auth Service
 * @namespace Services
 */
(function(){
    'use strict';
    
    angular
		.module('auth')
		.service('authService',authService);

    authService.$inject = ['$http','$state']

    function authService($http,$state){

		var clientId = '1051839863756-dtrc971i89dm5322cash6pq6l9r37ffb.apps.googleusercontent.com';
		var apiKey = 'AIzaSyDcTt_F7uGVr8SdWS_OxEk_ESpxKAofpJg';	
		var scopes = 'https://www.googleapis.com/auth/plus.me';
		var user = {
		    authenticated: false,
		    name:"",
		    image:"",
		}
		var service = {
		    handleClientLoad:handleClientLoad,
		    handleAuthClick:handleAuthClick,	
		    logout:logout,
		    user:user
		}

		return service;
		

		function handleClientLoad() {
            gapi.client.setApiKey(apiKey);
            window.setTimeout(checkAuth,1);
		}
	
		function checkAuth() {
            gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
		}

		function handleAuthResult(authResult) {       
	    
            if (authResult && !authResult.error) {
				makeApiCall();
            } else {		
				user.authenticated=false;	
				$state.transitionTo('login', {})
            }
		}
	
		function handleAuthClick() {
            gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
            return false;
		}
		
		function makeApiCall() {
		    var that = this;
	
	        gapi.client.load('plus', 'v1').then(function() {	  
				var request = gapi.client.plus.people.get({
				    'userId': 'me'
				});
			
				request.execute(function(resp) {
				    user.image = resp.image.url;
				    user.name = resp.displayName;
				    user.authenticated=true;
				    $state.transitionTo('calculator', {});
				});
				
            });
		}

		function logout(){
		    
		}
	
    }
    
})();
