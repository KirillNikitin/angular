(function() {
	"use strict";

	angular
		.module("feature")
		.factory("getData", getData);

	function getData($http, model) {
		return {
			get: function(){
				return $http.get("todo.json");
			},
			model: model
		}

	}
	
})();

