(function(){
    'use strict';

    angular
	.module('main')
	.service('mainService',mainService);

    mainService.$inject = ['$interval'];
    
    function mainService($interval){
	
	var chronometer=0;
	var rota;
	var service = {
	    startChronometer:startChronometer,
	    chronometer:chronometer,
	    rota:rota
	}

	return service;

	function startChronometer(){
	    var that = this;	  
	    that.chronometer=0; 
	    $interval(function(){		
		that.chronometer=that.chronometer+1;
	    },1000)
    
	}

    }



})();
