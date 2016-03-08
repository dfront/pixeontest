/**
 * Calculator Directive
 * @namespace Directives
 */
(function(){
    
    angular
		.module('calculator')
		.directive('ngcalculator',ngcalculator);

    ngcalculator.$inject = ['calculatorService','authService'];

    function ngcalculator(calculatorService,authService){
    	
		var directive = {
		    link:link,
		    templateUrl:'app/calculator/views/calculator.html'
		}
		
		return directive;
	
		function link(scope,elements,attrs){
		    scope.calculatorService = calculatorService;
		    scope.authService = authService;
		}
    }

})();
