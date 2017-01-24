(function() {
	"use strict";

	angular
		.module("feature")
		.controller("headerCtrl", headerCtrl);

	function headerCtrl($scope, getData, model, $rootScope) {
		// public API
		// $rootScope.todo = {};
		// $rootScope.todo.items = [
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Estimate...", "done": false, "deadline": 1288323623006, "responsible": "ivanov", "estimationHours": 20, "notes": "Note1" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Create...", "done": false, "deadline": 1288323623006, "responsible": "petrov", "estimationHours": 45, "notes": "Note2" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Edit...", "done": true, "deadline": 1288323623006, "responsible": "sidorov", "estimationHours": 8, "notes": "Note3" },
		// 	{ "action": "Delete...", "done": false, "deadline": 1288323623006, "responsible": "nikitin", "estimationHours": 12, "notes": "Note4" }
		// ]
		
		$scope.todo = model;
		$scope.todo.items=[];

		getData.get().then(function(res){

			$scope.todo.items = res.data;
		});
		$scope.showComplete = true;
		
		function removeCompletedItems(items){
			var result = confirm("Delete ALL the complete items?");
			if (result) {
				var showComplete = this.showComplete;			
				var copmleteItems = function(arr){
					var resArr = [];
					if (angular.isArray(arr)) {
						angular.forEach(arr, function(item) {
							if (item.done === false) {
								resArr.push(item);
							}
						});
						if(arr.length === resArr.length)
							alert('Nothing to delete');
						return resArr;
					}
					else {						
						return items;
					}
				};				
				this.todo.items = copmleteItems(this.todo.items);
			}	
		}
		
		$scope.removeCompletedItems = removeCompletedItems;		
		
		$scope.incompleteCount = incompleteCount;
		$scope.warningLevel = warningLevel;

		function incompleteCount(items) {
			var count = 0;

			angular.forEach(items, function(item) {
				if (!item.done) count++;
			});
			return count;
		}
		
		function warningLevel(items) {
			return incompleteCount(items) < 3 ? "label-success" : "label-warning";
		}	
		
		

	}
})();


