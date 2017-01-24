(function() {
	"use strict";
	
	angular
		.module("feature")
		.controller("tableCtrl", tableCtrl);
		
	function tableCtrl($scope, $rootScope, model, filterFilter) {
		
		$scope.todo = model;
		// $scope.todo.items = $rootScope.todo.items;
		
		function removeItem(item){
			var index = this.todo.items.indexOf(item);
			var result = confirm("Are you sure?");
			if (result) {
				this.todo.items.splice(index, 1); 
			}			
		}
		
		
		
		$scope.removeItem = removeItem;

		$scope.predicate = 'action';
		$scope.reverse = true;
		$scope.order = function(predicate) {
			$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
			$scope.predicate = predicate;
		};
		
		$scope.search = {};

		$scope.resetFilters = function () {
			// needs to be a function or it won't trigger a $watch
			$scope.search = {};
		};
		
		// pagination controls
		$scope.currentPage = 1;
		$scope.totalItems = $scope.todo.items.length;
		$scope.entryLimit = 8; // items per page
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

		// $watch search to update pagination
		$scope.$watch('search', function (newVal, oldVal) {
			$scope.filtered = filterFilter($scope.todo.items, newVal);
			$scope.totalItems = $scope.filtered.length;
			$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
			$scope.currentPage = 1;
		}, true);
		
		$scope.data = {
			repeatSelect: null,
			availableOptions: [
				{option: '8 items per page', limit: 8},
				{option: '16 items per page', limit: 16},
				{option: 'all items', limit: 1000}				
			]};
		 $scope.data.change = function(){
			$scope.entryLimit = parseInt(this.repeatSelect);
		};
		
		
	}
	angular.module("feature")
	.directive('myRating', [function(){
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			 scope: {
			 	rcount:'@'
			 },

			  // {} = isolate, true = child, false/undefined = no change
			 
			
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<div><span ng-bind="rating"></span></div>',
			// templateUrl: '',
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
		
				$scope.rating = $scope.rcount < 1000 ? 
					$scope.rcount < 500 ? 
						$scope.rcount < 200 ? 
							$scope.rcount < 100 && $scope.rcount > 0 ? '*' 
							: '**'
						: '***'	
					: '****'
				: '*****';	
			}
		};
	}]);

})();