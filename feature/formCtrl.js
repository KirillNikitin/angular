(function() {
	"use strict";
	
	angular
		.module("feature")
		.controller("formCtrl", formCtrl)
		
	function formCtrl($scope, $rootScope) {
		var data = this;
		data.addNewItem = function (items, newItem) {
			if (newItem && newItem.action) {
				items.push({
					action: newItem.action,
					done: false,
					deadline: newItem.deadline,
					responsible: newItem.responsible,
					estimationHours: newItem.estimationHours,
					notes: newItem.notes
				});
				newItem.action = "";
				newItem.deadline = "",
				newItem.responsible = "",
				newItem.estimationHours = "",
				newItem.notes = ""
			}
		}
		
		$scope.addNewItem = data.addNewItem;
		
		$rootScope.data = data;
	}
})();