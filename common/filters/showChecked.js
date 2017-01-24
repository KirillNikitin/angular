(function() {
	"use strict";

	angular
		.module("commonFilters")
		.filter("checkedItems", checkedItems);

	// filter
	function checkedItems() {
		return function(items, showComplete) {
			var resArr = [];
			if (angular.isArray(items)) {
				angular.forEach(items, function(item) {
					if (item.done === false || showComplete === true) {
						resArr.push(item);
					}
				});
				return resArr;
			}
			else {
				return items;
			}
		};
	}
	
})();