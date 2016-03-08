/**
 * Calculator Factory
 * @namespace Factories
 */
(function(){
    'use strict';

    angular
		.module('calculator')
		.factory('calculatorFactory',calculatorFactory);

    function calculatorFactory(){	

		var service = {
		    combine:combine
		}
	
		return service;
	
		function combine( inpSet, qty ) {
		  var inpLen = inpSet.length;
		  var combi = [];
		  var result = []; 
		  var recurse = function( left, right ) {
		    if ( right == 0 ) {
		      result.push( combi.slice(0) );
		    } else {
		      for ( var i = left; i <= inpLen - right; i++ ) {
			combi.push( inpSet[i] );
			recurse( i + 1, right - 1 );
			combi.pop();
		      }
		    }
		  }
		  recurse( 0, qty );
		  return result;
		}  
    }
})();
