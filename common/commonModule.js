(function() {
	"use strict";

	angular.module("common", [
		"commonFilters",
		"commonServices",
		"ui.bootstrap"
	])
		.config(appConfig)
		.run(appRun);

	function appConfig() {
		console.log("common config");
	}

	function appRun() {
		console.log("common run");
	};
	
})();