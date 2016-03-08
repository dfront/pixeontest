/**
 * Calculator Service
 * @namespace Services
 */
(function(){
    'use strict';

    angular
		.module('calculator')
		.service('calculatorService',calculatorService);

    calculatorService.$inject = ['calculatorFactory'];

    function calculatorService(calculatorFactory){
	
		var field1,field2;
		var results1=[];
		var results2=[];
	
		var service = {
		    field1:field1,
		    field2:field2,
		    results1:results1,
		    results2:results2,
		    process:process,	    
		    clear:clear
		}

		return service;

		function process(){
		    var newField1;
		    var that = this;	    
		    var arrField1 =  that.field1.split(" ");    
		 
		    that.results1=[];
		    that.results2=[];
		    
		    for(var i in arrField1){
				if(isNaN(arrField1[i]) && arrField1[i] != ''){
				    newField1="";
				    for(var y in arrField1[i]){
						if(isNaN(arrField1[i][y])){		   
						    newField1 += arrField1[i][y];
						}		    
				    }		    
				    that.results1.push(newField1);
				}
		    }
	
		    that.results1 = that.results1.filter(function(item, pos) {
				return that.results1.indexOf(item) == pos;
		    })
		   
		    that.results2 = calculatorFactory.combine(that.results1,that.field2);	    
		   
		}
	
		function clear(){
		    var that = this;	
		    that.results1 = [];
		    that.results2 = [];
		    that.field1 = "";
		    that.field2 = "";
		}
	}
	    
})();
