(function() {
	"use strict";

	angular
		.module("feature")
		.directive("taskList", taskList);

		// directives
	function taskList() {
		return {
			restrict: "A",
			templateUrl: "includes/table.html"
		};
	}
	
})();

