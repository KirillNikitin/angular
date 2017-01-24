(function() {
	"use strict";

	angular
		.module("commonServices")
		.value("model", {
			user: "Kirill",
			userPhoto: "./images/Kirill_Nikitin.jpg" //,
			// items: [
			// 	{ "action": "Estimate...", "done": false },
			// 	{ "action": "Create...", "done": false },
			// 	{ "action": "Edit...", "done": true },
			// 	{ "action": "Delete...", "done": false }
			// ]
		})
})();