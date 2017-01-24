(function() {
	"use strict";

	angular.module("todoApp", [
		"common",
		"feature"
	])
		.config(appConfig)
		.run(appRun)

	function appConfig() {
		console.log("app config");
	}

	function appRun() {
		console.log("app run");
	}
	


	// filter

	// directives


})();