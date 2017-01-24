(function() {
	"use strict";

	angular
		.module("commonFilters")
		.filter("startFrom", startFrom);

	// filter
	function startFrom() {
		return function (input, start) {
			if (input) {
				start = +start;
				return input.slice(start);
			}
			return [];
		};
	}
	
})();